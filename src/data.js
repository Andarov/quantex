import { v4 as uuidv4 } from "uuid";
import btc from './img/btc.svg'
import btcDeg from './img/btcDeg.svg'
import ltc from './img/ltc.svg'
import ltcDeg from './img/ltcDeg.svg'

export const faqs = [
  {
    id: uuidv4(),
    title: "24/7 Trading",
    text: "Crypto bots can operate round the clock, taking advantage of market movements even when you're not actively monitoring.",
  },
  {
    id: uuidv4(),
    title: "Diversification",
    text: "Bots can manage multiple assets simultaneously, spreading risk across various cryptocurrencies or trading pairs.",
  },
  {
    id: uuidv4(),
    title: "Efficiency and Consistency",
    text: "Bots maintain consistency in executing strategies, ensuring trades are made according to predefined parameters without deviation.",
  },
];

export const tabs = [
  {
    label: "Trading Bots",
    subtitle: 'Profit from every market move 24/7, with fully automated trading bots.',
    value: "bots",
    desc: `Set up effective back-tested GRID and DCA strategies in a few minutes or build your custom strategies.`,
    cards: [
        {
            id: uuidv4(),
            img: btc,
            imgDeg: btcDeg,
            title: 'BTC',
            percent: '+1.6%',
            sum: '$29,850.15',
            total: '2.73 BTC'
        },
        {
            id: uuidv4(),
            img: ltc,
            imgDeg: ltcDeg,
            title: 'LTC',
            percent: '+0.4%',
            sum: '$3,676.76',
            total: '39.27 LTC'
        },
    ]
  },
  {
    label: "Smart Orders",
    value: "order",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quos culpa quaerat? Omnis pariatur veniam dicta possimus voluptates autem magni, mollitia cum fugit voluptatum nihil doloremque laboriosam eaque quae quos.`,
  },
  {
    label: "Trading Terminal",
    value: "terminal",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quos culpa quaerat? Omnis pariatur veniam dicta possimus voluptates autem magni, mollitia cum fugit voluptatum nihil doloremque laboriosam eaque quae quos.`,
  },
];
