// import { formatCurrencySymbol } from 'src/lib/utils/currency';
// import { isObject } from 'lodash';
// import { geojsonToWKT, wktToGeoJSON } from '@terraformer/wkt';
// // import { NUM_STEP } from 'src/components/on-boarding/step-bar';
// // import { FEE_PER_RECIPIENT, FLAT_FEE_NFT, limitStep } from 'src/lib/utils/constant';
// // import globalVariable from 'src/config/env';
// export const findLastIndex = (
// 	array: any[],
// 	searchKey: string,
// 	searchValue: number
// ): number => {
// 	const index = array
// 		.slice()
// 		.reverse()
// 		.findIndex((x) => x[searchKey] === searchValue);
// 	const count = array.length - 1;
// 	const finalIndex = index >= 0 ? count - index : index;
// 	return finalIndex;
// };

// export const timeout = (ms) => {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// };

// export const formatUrl = (url) => {
// 	if (!url) return '';
// 	try {
// 		if (new URL(url)) return url;
// 		return 'http://' + url?.replace(/(^\w+:|^)\/\//, '');
// 	} catch (error) {
// 		return 'http://' + url?.replace(/(^\w+:|^)\/\//, '');
// 	}
// };
// export const joinAgentName = (v) => {
// 	if (!v) return '';
// 	return [v?.first_name, v?.last_name].join(' ');
// };

// // export const convertData = (data) => {
// //   const list: any[] = [];
// //   Object.keys(data).forEach((key) => {
// //     if (Array.isArray(data[key])) {
// //       data[key]?.map((v, i) => {
// //         if (typeof list[i] !== 'object') {
// //           list[i] = {};
// //           list[i][key] = v;
// //         } else {
// //           list[i][key] = v;
// //         }
// //       });
// //     }
// //   });
// //   return list;
// // };

// export const convertData = (data) => {
// 	const list: any[] = [];
// 	let agentName = '';
// 	if (!data)
// 		return {
// 			agent: '',
// 			data: [],
// 		};
// 	Object.keys(data).forEach((key) => {
// 		if (data[key]?.first_name || data[key]?.last_name) {
// 			agentName += [data[key]?.first_name, data[key]?.last_name].join(' ');
// 		}
// 		if (Array.isArray(data[key])) {
// 			data[key]?.map((v, i) => {
// 				if (typeof list[i] === 'object') {
// 					if (key === 'cpc') {
// 						list[i][key] = formatCurrencySymbol(v, 'USD', true);
// 					} else {
// 						list[i][key] = v;
// 					}
// 				} else {
// 					list[i] = {};
// 					if (key === 'cpc') {
// 						list[i][key] = formatCurrencySymbol(v, 'USD', true);
// 					} else {
// 						list[i][key] = v;
// 					}
// 				}
// 			});
// 		}
// 	});
// 	return {
// 		agent: agentName,
// 		data: list,
// 	};
// };

// const GeoJSON = {
// 	type: 'FeatureCollection',
// 	features: [
// 		{
// 			type: 'Feature',
// 			properties: {},
// 			geometry: {},
// 		},
// 	],
// };

// export const formatGeoJson = (v) => {
// 	if (v) {
// 		try {
// 			return JSON.parse(v);
// 		} catch (e) {
// 			if (v && typeof v !== 'string' && isObject(v)) {
// 				return v;
// 			}
// 			return {};
// 		}
// 	}
// };

// export const formatDataNH = (arr) => {
// 	if (!arr?.length) return [];
// 	const el = [...arr];
// 	if (el?.length < limitStep) {
// 		for (let j = 0; j < limitStep; j++) {
// 			if (!el[j]) {
// 				el[j] = null;
// 			}
// 		}
// 	}
// 	return el?.map((v) => {
// 		return { ...v, geometry: formatGeoJson(v?.geometry) };
// 	});
// };

// export const handleFormatDataResponse = (payload) => {
// 	return payload?.length > 0
// 		? formatDataNH(payload)
// 		: new Array(limitStep).fill(null);
// };

// export const setStorageGeoJson = (data) => {
// 	return localStorage.setItem('GeoJson', JSON.stringify(data || {}));
// };

// export const getStorageGeoJson = () => {
// 	let parsedData;
// 	try {
// 		parsedData = JSON.parse((localStorage.getItem('GeoJson') as any) || '{}');
// 	} catch (e) {
// 		parsedData = {};
// 	}
// 	return parsedData;
// };

// export const removeStorageGeoJson = () => {
// 	localStorage.removeItem('GeoJson');
// };

// export const updateDataStorage = (label, data) => {
// 	// if (!isEmpty(getStorageGeoJson())) {
// 	const dataStorage = getStorageGeoJson();
// 	dataStorage[label] = data;
// 	setStorageGeoJson(dataStorage);
// 	// }
// };
// export const getGeoJSONPrototype = (google) => {
// 	google?.maps.Polygon.prototype.getGeoJSON = function () {
// 		const paths = this.getPaths().getArray();
// 		const GeoJSON: { type: string; coordinates: Array<Array<Array<number>>> } =
// 			{
// 				type: 'Polygon',
// 				coordinates: [],
// 			};

// 		for (const path of paths) {
// 			const pathArray: any = [];
// 			const points: any = path.getArray();
// 			let firstPoint: any = false;

// 			for (const point of points) {
// 				if (firstPoint === false) {
// 					firstPoint = point;
// 				}

// 				pathArray.push([point.lng(), point.lat()]);
// 			}

// 			pathArray.push([firstPoint.lng(), firstPoint.lat()]);

// 			GeoJSON.coordinates.push(pathArray);
// 		}
// 		const geoJsonWKT = geojsonToWKT(GeoJSON);
// 		return { GeoJSON, geoJsonWKT };
// 	};
// };
// export const getGeoJSONWktPrototype = (google) => {
// 	google?.maps.Polygon.prototype.getGeoJSONWkt = function () {
// 		const paths = this.getPaths().getArray();
// 		const GeoJSON = {
// 			match: 'polygon',
// 			value: {
// 				wkt: '',
// 			},
// 		};
// 		GeoJSON.value.wkt = GeoJSON.value.wkt.concat('POLYGON((');
// 		for (const path of paths) {
// 			const points: any = path.getArray();
// 			let firstPoint: any = false;

// 			for (const point of points) {
// 				if (firstPoint === false) {
// 					firstPoint = point;
// 				} else {
// 					GeoJSON.value.wkt = GeoJSON.value.wkt.concat(',');
// 				}
// 				GeoJSON.value.wkt = GeoJSON.value.wkt.concat(
// 					point.lng() + ' ' + point.lat()
// 				);
// 			}
// 			GeoJSON.value.wkt = GeoJSON.value.wkt.concat(',');
// 			GeoJSON.value.wkt = GeoJSON.value.wkt.concat(
// 				firstPoint.lng() + ' ' + firstPoint.lat()
// 			);
// 		}
// 		GeoJSON.value.wkt = GeoJSON.value.wkt.concat('))');
// 		return GeoJSON;
// 	};
// };
// export const swapCoordinates = (google, GeoJSON) => {
// 	const GeoJSONConvert = wktToGeoJSON(GeoJSON);
// 	let paths: any = [];
// 	const type = GeoJSONConvert?.type || 'Polygon';
// 	if (!GeoJSONConvert?.coordinates?.length) return [];
// 	for (let i = 0; i < GeoJSONConvert.coordinates.length; i++) {
// 		if (type == 'Polygon') {
// 			for (let j = 0; j < GeoJSONConvert.coordinates[i].length; j++) {
// 				if (!paths) {
// 					paths = [];
// 				}

// 				if (!paths[i]) {
// 					paths[i] = [];
// 				}

// 				paths[i].push({
// 					lat: GeoJSONConvert.coordinates[i][j][1],
// 					lng: GeoJSONConvert.coordinates[i][j][0],
// 				});
// 			}
// 		} else if (type == 'MultiPolygon') {
// 			for (let j = 0; j < GeoJSONConvert.coordinates[i].length; j++) {
// 				const path: any = [];
// 				for (let k = 0; k < GeoJSONConvert.coordinates[i][j].length; k++) {
// 					const ll: any = new google?.maps.LatLng(
// 						GeoJSONConvert.coordinates[i][j][k][1],
// 						GeoJSONConvert.coordinates[i][j][k][0]
// 					);
// 					path.push(ll);
// 				}
// 				paths.push(path);
// 			}
// 		}
// 	}
// 	return paths;
// };

// export const addListenerEventPolygon = (google) => {
// 	google?.maps.Polygon.prototype.enableCoordinatesChangedEvent = function () {
// 		// eslint-disable-next-line
// 		let me = this,
// 			isBeingDragged = false,
// 			// eslint-disable-next-line prefer-const
// 			triggerCoordinatesChanged = function () {
// 				google?.maps.event.trigger(me, 'coordinates_changed');
// 			};
// 		google?.maps.event.addListener(me, 'dragstart', function () {
// 			isBeingDragged = true;
// 		});

// 		google?.maps.event.addListener(me, 'dragend', function () {
// 			triggerCoordinatesChanged();
// 			isBeingDragged = false;
// 		});

// 		const paths = me.getPaths();
// 		paths.forEach(function (path, i) {
// 			google?.maps.event.addListener(path, 'insert_at', function () {
// 				triggerCoordinatesChanged();
// 			});
// 			google?.maps.event.addListener(path, 'set_at', function () {
// 				if (!isBeingDragged) {
// 					triggerCoordinatesChanged();
// 				}
// 			});
// 			google?.maps.event.addListener(path, 'remove_at', function () {
// 				triggerCoordinatesChanged();
// 			});
// 		});
// 	};
// };
// export const clearListeners = (google) => {
// 	google?.maps.event.clearListeners(google?.map, 'coordinates_changed');
// 	google?.maps.event.clearListeners(google?.map, 'dragend');
// 	google?.maps.event.clearListeners(google?.map, 'insert_at');
// 	google?.maps.event.clearListeners(google?.map, 'set_at');
// 	google?.maps.event.clearListeners(google?.map, 'remove_at');
// };

// export const cloneArr = (arrLayer, currentStep, newEl) => {
// 	const arr = [...arrLayer];
// 	arr.splice(currentStep, 1, newEl);
// 	return arr;
// };

// export const cloneObj = (arrLayer, currentStep, newEl) => {
// 	const arr = Object.assign({}, arrLayer);
// 	arr[currentStep] = newEl;
// 	return arr;
// };

// // export const includesNull = (arr, currentStep) => {
// //   if (currentStep === NUM_STEP.COMPLETE) return false;
// //   if (!arr[currentStep]) return true;
// //   return arr.some((el) => el == null);
// // };

// export const splitString = (
// 	str: string | null | undefined,
// 	numStart = 8,
// 	numEnd = 6
// ): string => {
// 	if (!str?.length) return '';
// 	if (str?.length <= numStart + numEnd) return str;
// 	return (
// 		str?.substring(0, numStart) + '...' + str.substring(str.length - numEnd)
// 	);
// };

// export const prototypeGetBounds = (google) => {
// 	if (!google) return;
// 	google?.maps.Polygon.prototype.getBounds = function () {
// 		const bounds = new google?.maps.LatLngBounds();
// 		const paths = this.getPaths();
// 		let path;
// 		for (let i = 0; i < paths.getLength(); i++) {
// 			path = paths.getAt(i);
// 			for (let ii = 0; ii < path.getLength(); ii++) {
// 				bounds.extend(path.getAt(ii));
// 			}
// 		}
// 		return bounds;
// 	};
// };

// export const convertHexToDecimal = (hex: string): number => {
// 	const decimal = parseInt(hex, 16);
// 	return decimal;
// };

// export const convertAddressWallet = (
// 	value: string | undefined | null
// ): string => {
// 	if (value) {
// 		return value.length > 10
// 			? `${value.slice(0, 6)}...${value.slice(-4)}`
// 			: value;
// 	}
// 	return '';
// };

// export const switchNetwork = async (
// 	ethereum: any,
// 	callbackSwitchError: any,
// 	callbackAddError: any
// ): Promise<void> => {
// 	try {
// 		await ethereum.request({
// 			method: 'wallet_switchEthereumChain',
// 			params: [{ chainId: globalVariable.TESTNET_CHAINID_HEX }],
// 		});
// 	} catch (switchError: any) {
// 		// This error code indicates that the chain has not been added to MetaMask.
// 		if (switchError.code === 4902) {
// 			try {
// 				await ethereum.request({
// 					method: 'wallet_addEthereumChain',
// 					params: [
// 						{
// 							chainId: globalVariable.TESTNET_CHAINID_HEX,
// 							nativeCurrency: {
// 								name: 'Matic Token',
// 								symbol: 'MATIC',
// 								decimals: 18,
// 							},
// 							chainName: 'Mumbai',
// 							rpcUrls: [globalVariable.TESTNET_RPC],
// 							blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
// 						},
// 					],
// 				});
// 			} catch (addError) {
// 				callbackAddError && callbackAddError();
// 			}
// 		}
// 		callbackAddError && callbackSwitchError();
// 	}
// };

// export const getPolygonscanTransactionLink = (
// 	txHash: string | undefined
// ): string => {
// 	return `${globalVariable.POLYGONSCAN}tx/${txHash}`;
// };

// export const getPolygonscanContractLink = (
// 	contract: string | undefined
// ): string => {
// 	return `${globalVariable.POLYGONSCAN}address/${contract}`;
// };

// export const getPolygonscanTokenLink = (
// 	contract: string | undefined,
// 	token: number | undefined
// ): string => {
// 	return `${globalVariable.POLYGONSCAN}token/${contract}?a=${token}`;
// };

// export const getOpenseaLink = (
// 	contract: string | undefined,
// 	tokenId: number | undefined
// ): string => {
// 	return `${globalVariable.POLYGON_OPENSEA}${contract}/${tokenId}`;
// };

// export const calculateMintFee = (recipients: number): number => {
// 	const fee = (FLAT_FEE_NFT + recipients * FEE_PER_RECIPIENT).toFixed(2);
// 	return parseFloat(fee);
// };

import moment from 'moment';

import { forceLogout } from './auth';
import { StorageKeys } from './enum';
import { RcFile } from 'antd/es/upload';
import { message } from 'antd';
import { UploadFile } from 'antd/lib';

export interface DurationTime {
  days: number;
  hours: number;
  milliseconds: number;
  minutes: number;
  months: number;
  seconds: number;
  years: number;
}
export const formatDurationTime = (durationTime: string | number) => {
  return moment.duration(durationTime, 'second')['_data'] as DurationTime;
};

export const checkAccountPermission = async () => {
  const token = localStorage.getItem(StorageKeys.SESSION_KEY);
  if (!token) {
    forceLogout();
  }
};

export const uniqueArr = (arr: [any]) => [...new Set(arr)];

export const getFormatDate = (dateInput) => {
  const date = new Date(dateInput);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // timeZone: 'UTC',
  };

  const formattedDate = date.toLocaleString('en-US', options as any);
  return formattedDate;
};
export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  // const isLt2M = file.size / 1024 / 1024 < 2;
  // if (!isLt2M) {
  //   message.error('Image must smaller than 2MB!');
  // }
  return isJpgOrPng;
};
export const onPreview = async (file: UploadFile) => {
  let src = file.url as string;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj as RcFile);
      reader.onload = () => resolve(reader.result as string);
    });
  }
};

import _ from 'lodash';

const htmlsToReplace = {
  '&quot;': `"`,
  '&amp;': '&',
  '&shy;': '-',
  '&eacute;': 'é',
  '&Uuml;': 'Ü',
  '&uuml;': `ü`,
  '&ldquo;': `‘`,
  '&rsquo;': `’`,
  '&#039;': `'`,
  '&euml;': `ë`,
  '&rdquo;': `”`,
  '&Iacute;': `Í`,
  '&aacute;': `á`,
  '&Aacute;': `Á`,
  '&ntilde;': `ñ`,
  '&pi;': `π`,
  '&ouml': `ö`,
  '&Ouml': `Ö`,
  '&iacute': `í`,
  '&deg;': `°`,
};

const removeHTMLCharacters = (string) => {
  let modifiedString = string;
  for (let [html, replacementString] of Object.entries(htmlsToReplace)) {
    modifiedString = _.replace(modifiedString, new RegExp(html, 'g'), replacementString);
  }
  return modifiedString;
};

export const convertToRegularString = (string) => {
  return removeHTMLCharacters(
    string &&
      string.replace(/&#(?:x([\da-f]+)|(\d+));/gi, function (_, hex, dec) {
        return String.fromCharCode(dec || +('0x' + hex));
      }),
  );
};
