import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const Welcome = () => {
	return (
		<div
			css={css`
				margin: 0;
				height: 100vh;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: 1fr;

				.background-one,
				.background-two,
				.background-three {
					background-color: #151515;
				}

				.link-container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					height: 100%;
					position: relative;
					z-index: 0;
				}

				a {
					font-family: 'Bungee', cursive;
					font-size: 2.5em;
				}

				.link-one {
					color: #53d9d1;
					transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
					line-height: 1em;
				}

				.link-one:hover {
					color: #111;
					transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
				}

				.link-one::before {
					content: '';
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					top: 0;
					right: 0;
					background-color: #53d9d1;

					clip-path: circle(0% at 50% calc(50%));
					transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
				}

				.link-one:hover::before {
					clip-path: circle(100% at 50% 50%);
				}

				.link-one::after {
					content: '';
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					top: 0;
					right: 0;
					background-color: #151515;

					clip-path: polygon(
						40% 0%,
						60% 0%,
						60% 0%,
						40% 0%,
						40% 100%,
						60% 100%,
						60% 100%,
						40% 100%
					);

					transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
				}

				.link-one:hover::after {
					clip-path: polygon(
						40% 10%,
						60% 10%,
						60% 35%,
						40% 35%,
						40% 90%,
						60% 90%,
						60% 65%,
						40% 65%
					);
				}

				.link-two {
					color: #f27b9b;
					transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
				}

				.link-two:hover {
					color: #111;
					transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
				}

				.link-two::before {
					content: '';
					position: absolute;
					z-index: -2;
					width: 100%;
					height: 100%;
					top: 0;
					right: 0;
					clip-path: polygon(
						0% -20%,
						100% -30%,
						100% -10%,
						0% 0%,
						0% 130%,
						100% 120%,
						100% 100%,
						0% 110%
					);
					background-color: #f27b9b;

					transition: clip-path 1s cubic-bezier(0.25, 1, 0.5, 1);
				}

				.link-two:hover::before {
					clip-path: polygon(
						0% 10%,
						100% 0%,
						100% 20%,
						0% 30%,
						0% 100%,
						100% 90%,
						100% 70%,
						0% 80%
					);
				}

				.link-two::after {
					content: '';
					position: absolute;
					z-index: -1;
					width: 5ch;
					height: 5ch;
					top: 50%;
					right: 50%;
					transform: translate(50%, -50%) rotate(0deg) scale(0);
					transition: transform 1s ease;

					background-color: #f27b9b;
				}

				.link-two:hover::after {
					transform: translate(50%, -50%) rotate(135deg) scale(1);
				}

				.link-three {
					color: #eb7132;
				}

				.link-three::after {
					content: '';
					position: absolute;
					z-index: 2;
					width: 50%;
					height: 100%;
					top: 0%;
					left: 0%;
					transform: translate(0, -50%) scaleY(0);
					transition: transform 1s ease;
					mix-blend-mode: difference;

					clip-path: polygon(
						20% 60%,
						100% 60%,
						100% 40%,
						20% 40%,
						20% 0%,
						60% 0%,
						60% 20%,
						20% 20%
					);

					background-color: #eb7132;
				}

				.link-three:hover::after {
					transform: translate(0, 0%) scaleY(1);
				}

				.link-three::before {
					content: '';
					position: absolute;
					z-index: 2;
					width: 50%;
					height: 100%;
					bottom: 0%;
					right: 0%;
					transform: translate(0, 50%) scaleY(0);
					transition: transform 1s ease;
					mix-blend-mode: difference;

					clip-path: polygon(
						80% 40%,
						0% 40%,
						0% 60%,
						80% 60%,
						80% 100%,
						40% 100%,
						40% 80%,
						80% 80%
					);

					background-color: #eb7132;
				}

				.link-three:hover::before {
					transform: translate(0%, 0%) scaleY(1);
				}
			`}
		>
			<div className="background-one">
				<div className="link-container">
					<a
						className="link-one"
						href="https://jhancock532.github.io/link-hover-effects/"
					>
						Sign In
					</a>
				</div>
			</div>
			<div className="background-two link-container">
				<a
					className="link-two"
					href="https://jhancock532.github.io/link-hover-effects/"
				>
					Sign Up
				</a>
			</div>
			<div className="background-three link-container">
				<a
					className="link-three"
					href="https://jhancock532.github.io/link-hover-effects/"
				>
					Links
				</a>
			</div>
		</div>
	);
};

export default Welcome;
