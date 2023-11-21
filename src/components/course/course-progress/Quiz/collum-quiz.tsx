import { css } from '@emotion/react';
import { Button, Tag, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import { MatchQuestion, MatchQuizAnswer, Question, QuestionTypeEnum, Quiz } from 'src/lib/types/backend_modal';
import { GrConnect } from 'react-icons/gr';
import { isEmpty } from 'lodash';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;
const Column = ({ data, onRowClick, selectedRow, matchedPair, isResult = false }) => {
  const disableList = matchedPair.map((v) => [v.first, v.second].flat(Infinity)).flat(Infinity);
  return (
    <div
      className="left-column"
      css={css`
        .row {
          border: 1px solid #000;
          padding: 10px;
          border-radius: 5px;
          margin: 10px;
          cursor: pointer;
          max-width: 250px;
          &:hover {
            box-shadow:
              rgba(0, 0, 0, 0.3) 0px 19px 38px,
              rgba(0, 0, 0, 0.22) 0px 15px 12px;
          }
        }
        .selecting {
          border-color: green;
          box-shadow:
            rgba(0, 0, 0, 0.3) 0px 19px 38px,
            rgba(0, 0, 0, 0.22) 0px 15px 12px;
          border-width: 2px;
        }
        .disabled {
          cursor: not-allowed;
          opacity: 0.3;
        }
      `}
    >
      {data.map((row, index) => (
        <div
          className={`row ${disableList.includes(row.id) || isResult ? 'disabled' : ''} ${
            [selectedRow.first, selectedRow.second].includes(row.id) ? 'selecting' : ''
          }`}
          key={row.id}
          onClick={() => {
            if (disableList.includes(row.id)) return;
            onRowClick(row.id);
          }}
        >
          {row.content}
        </div>
      ))}
    </div>
  );
};

interface ColumnQuiz {
  quiz: Question;
  onChange: (
    quiz_id: string,
    question_type: QuestionTypeEnum,
    answer: string | Array<string> | Array<Array<string>>,
  ) => void;
  result: MatchQuizAnswer | undefined;
}

const ColumnQuiz: React.FC<ColumnQuiz> = ({ quiz, onChange, result }) => {
  const quizData = quiz.match_question;
  const firstColId = useMemo(() => {
    return quizData?.first_column.map((v) => v.id);
  }, [quizData?.first_column]);
  const secondColId = useMemo(() => {
    return quizData?.second_column.map((v) => v.id);
  }, [quizData?.second_column]);
  const [selectPair, setSelectPair] = useState<{ first: string; second: string }>({ first: '', second: '' });
  const [matchPair, setMatchPair] = useState<Array<{ first: string; second: string }>>([]);

  if (!quizData) return;
  const handleRowClick = (id) => {
    if (firstColId?.includes(id)) {
      setSelectPair((prev) => ({ ...prev, first: id }));
    } else {
      setSelectPair((prev) => ({ ...prev, second: id }));
    }
  };

  const handleConnect = (leftId, rightId) => {
    setMatchPair((prev) => {
      return [...prev.filter((v) => !isEmpty(v)), { first: leftId, second: rightId }];
    });
    onChange(quiz.id, quiz.question_type, [
      ...matchPair.filter((v) => !isEmpty(v)).map((pair) => [pair.first, pair.second]),
      [leftId, rightId],
    ]);
    setSelectPair({ first: '', second: '' });
  };

  const removeMatchedTag = (firstId: string) => {
    setMatchPair((prev) => {
      return prev.filter((pair) => pair.first !== firstId);
    });
    onChange(quiz.id, quiz.question_type, [
      ...matchPair.filter((v) => v.first !== firstId).map((pair) => [pair.first, pair.second]),
    ]);
  };
  const renderUserAns = (userAns, quizData: MatchQuestion, correctAnsList, isUserAns) => {
    return userAns?.map((v) => {
      const firstContent = quizData.first_column.find((first) => {
        return first.id === v[0];
      })?.content;
      const secondContent = quizData.second_column.find((second) => second.id === v[1])?.content;
      return (
        <Tag
          key={v[0]}
          closable={false}
          style={{ userSelect: 'none' }}
          color={correctAnsList && isUserAns ? (isCorrectAns(v, correctAnsList) ? 'green' : 'error') : 'blue'}
          icon={
            correctAnsList &&
            (isUserAns ? isCorrectAns(v, correctAnsList) ? <CheckCircleOutlined /> : <CloseCircleOutlined /> : '')
          }
        >
          <div className="tag-matched">
            <p title={firstContent}>{firstContent}</p>
            <p title={secondContent}>{secondContent}</p>
          </div>
        </Tag>
      );
    });
  };

  const isCorrectAns = (userAns, correctAnsList) => {
    return correctAnsList?.some((v) => v.includes(userAns[0]) && v.includes(userAns[1]));
  };
  console.log('result :==>>', result);

  return (
    <div
      css={css`
        max-width: 80%;
        .column-quiz {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .connect {
            display: flex;
            align-items: center;
            .ant-btn {
              background-color: transparent;
              border: none;
              box-shadow: none;
              svg {
                font-size: 20px;
              }

              &:hover:not([disabled]) {
                path {
                  fill: green;
                }
              }
            }
          }
          .column {
            display: flex;
          }
        }
        .matched-pair-tag,
        .correct-ans,
        .user-ans {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          .ant-tag {
            display: flex;
            justify-content: space-between;
            width: 200px;
          }
          .tag-matched {
            p {
              width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 3px 0;
            }
          }
        }

        .correct-ans,
        .user-ans {
          .ant-tag {
            width: 160px;
          }
        }
      `}
    >
      <div className="column-quiz">
        <Text className="question">{quizData?.content}</Text>
        <div className="column">
          <div className="first-col">
            <Column
              data={quizData.first_column}
              onRowClick={handleRowClick}
              selectedRow={selectPair}
              matchedPair={matchPair}
              isResult={!!result}
            />
          </div>
          <div className="connect">
            <Button
              shape="circle"
              disabled={!(selectPair.first && selectPair.second)}
              onClick={() => handleConnect(selectPair.first, selectPair.second)}
            >
              <GrConnect />
            </Button>
          </div>
          <div className="second-col">
            <Column
              data={quizData.second_column}
              onRowClick={handleRowClick}
              selectedRow={selectPair}
              isResult={!!result}
              matchedPair={matchPair}
            />
          </div>
        </div>
      </div>
      <div className="matched-pair-tag">
        {result ? (
          <>
            {/* <div>{renderUserAns(result.user_answer, quizData)}</div> */}
            <div className="ans">
              <p>Câu trả lời của bạn: </p>
              <div className="user-ans">
                {renderUserAns(result.user_answer, quizData, result?.correct_answer, true)}
              </div>
            </div>
            {result?.correct_answer ? (
              <div className="ans">
                <p>Đáp án: </p>
                <div className="correct-ans">
                  {renderUserAns(result.correct_answer, quizData, result?.correct_answer, false)}
                </div>
              </div>
            ) : null}
          </>
        ) : (
          matchPair?.map((pair) => {
            if (isEmpty(pair)) return;
            const firstContent = quizData.first_column.find((v) => v.id === pair.first)?.content;
            const secondContent = quizData.second_column.find((v) => v.id === pair.second)?.content;
            return (
              <Tag
                key={pair.first}
                closable={true}
                style={{ userSelect: 'none' }}
                onClose={() => removeMatchedTag(pair.first)}
                color="blue"
              >
                <div className="tag-matched">
                  <p title={firstContent}>{firstContent}</p>
                  <p title={secondContent}>{secondContent}</p>
                </div>
              </Tag>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ColumnQuiz;
