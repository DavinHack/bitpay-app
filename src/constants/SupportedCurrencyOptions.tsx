import React, {ReactElement} from 'react';
import BtcIcon from '../../assets/img/currencies/btc.svg';
import BchIcon from '../../assets/img/currencies/bch.svg';
import EthIcon from '../../assets/img/currencies/eth.svg';
import DogeIcon from '../../assets/img/currencies/doge.svg';
import LtcIcon from '../../assets/img/currencies/ltc.svg';
import XrpIcon from '../../assets/img/currencies/xrp.svg';
import UsdcIcon from '../../assets/img/currencies/usdc.svg';
import GusdIcon from '../../assets/img/currencies/gusd.svg';
import BusdIcon from '../../assets/img/currencies/busd.svg';
import DaiIcon from '../../assets/img/currencies/dai.svg';
import UsdpIcon from '../../assets/img/currencies/usdp.svg';
import WbtcIcon from '../../assets/img/currencies/wbtc.svg';
import ShibIcon from '../../assets/img/currencies/shib.svg';
import ApeIcon from '../../assets/img/currencies/ape.svg';
import EurocIcon from '../../assets/img/currencies/euroc.svg';
import {ImageSourcePropType} from 'react-native';

export interface SupportedCurrencyOption {
  id: string;
  img: string | ((props?: any) => ReactElement);
  currencyName: string;
  hasMultisig?: boolean;
  currencyAbbreviation: string;
  isToken?: boolean;
  imgSrc?: ImageSourcePropType;
  badgeUri?: string | ((props?: any) => ReactElement);
  badgeSrc?: ImageSourcePropType;
}

export const CurrencyListIcons: {
  [key in string]: (props: any) => ReactElement;
} = {
  btc: props => <BtcIcon {...props} />,
  bch: props => <BchIcon {...props} />,
  eth: props => <EthIcon {...props} />,
  doge: props => <DogeIcon {...props} />,
  ltc: props => <LtcIcon {...props} />,
  xrp: props => <XrpIcon {...props} />,
  usdc_e: props => <UsdcIcon {...props} />,
  gusd_e: props => <GusdIcon {...props} />,
  busd_e: props => <BusdIcon {...props} />,
  dai_e: props => <DaiIcon {...props} />,
  usdp_e: props => <UsdpIcon {...props} />,
  wbtc_e: props => <WbtcIcon {...props} />,
  shib_e: props => <ShibIcon {...props} />,
  ape_e: props => <ApeIcon {...props} />,
  euroc_e: props => <EurocIcon {...props} />,
};

export const SupportedUtxoCurrencyOptions: Array<SupportedCurrencyOption> = [
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.btc,
    currencyName: 'Bitcoin',
    currencyAbbreviation: 'btc',
    hasMultisig: true,
    imgSrc: require('../../assets/img/currencies/png/BTC.png'),
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.bch,
    currencyName: 'Bitcoin Cash',
    currencyAbbreviation: 'bch',
    hasMultisig: true,
    imgSrc: require('../../assets/img/currencies/png/BCH.png'),
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.doge,
    currencyName: 'Dogecoin',
    currencyAbbreviation: 'doge',
    hasMultisig: true,
    imgSrc: require('../../assets/img/currencies/png/DOGE.png'),
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.ltc,
    currencyName: 'Litecoin',
    currencyAbbreviation: 'ltc',
    hasMultisig: true,
    imgSrc: require('../../assets/img/currencies/png/LTC.png'),
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.xrp,
    currencyName: 'XRP',
    currencyAbbreviation: 'xrp',
    imgSrc: require('../../assets/img/currencies/png/XRP.png'),
  },
];

export const SupportedEvmCurrencyOptions: Array<SupportedCurrencyOption> = [
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.eth,
    currencyName: 'Ethereum',
    currencyAbbreviation: 'eth',
    hasMultisig: false,
    imgSrc: require('../../assets/img/currencies/png/ETH.png'),
  },
];

export const SupportedTokenOptions: Array<SupportedCurrencyOption> = [
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.usdc_e,
    currencyName: 'USD Coin',
    currencyAbbreviation: 'usdc',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/USDC.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.ape_e,
    currencyName: 'ApeCoin',
    currencyAbbreviation: 'ape',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/APE.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.euroc_e,
    currencyName: 'Euro Coin',
    currencyAbbreviation: 'euroc',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/EUROC.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.shib_e,
    currencyName: 'Shiba Inu',
    currencyAbbreviation: 'shib',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/SHIB.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.gusd_e,
    currencyName: 'Gemini Dollar',
    currencyAbbreviation: 'gusd',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/GUSD.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.busd_e,
    currencyName: 'Binance USD Coin',
    currencyAbbreviation: 'busd',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/BUSD.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.dai_e,
    currencyName: 'Dai',
    currencyAbbreviation: 'dai',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/DAI.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.usdp_e,
    currencyName: 'Pax Dollar',
    currencyAbbreviation: 'usdp',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/USDP.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
  {
    id: Math.random().toString(),
    img: CurrencyListIcons.wbtc_e,
    currencyName: 'Wrapped Bitcoin',
    currencyAbbreviation: 'wbtc',
    isToken: true,
    imgSrc: require('../../assets/img/currencies/png/WBTC.png'),
    badgeSrc: require('../../assets/img/currencies/png/ETH.png'),
    badgeUri: CurrencyListIcons.eth,
  },
];

export const SupportedCoinsOptions: Array<SupportedCurrencyOption> = [
  ...SupportedUtxoCurrencyOptions,
  ...SupportedEvmCurrencyOptions,
];

export const SupportedCurrencyOptions: Array<SupportedCurrencyOption> = [
  ...SupportedCoinsOptions,
  ...SupportedTokenOptions,
];
