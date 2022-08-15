import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from 'react-native-svg/src/elements/Svg';

export const ArrowSend = ({style, color}: SvgProps) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    style={style}
    color={color}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.9551 8.52958C19.1506 8.72458 19.25 8.98073 19.25 9.23661C19.25 9.49248 19.1506 9.74814 18.9551 9.94364L18.8691 10.0296C18.4791 10.4206 17.8461 10.4206 17.4551 10.0296L13.5918 6.1663L13.5918 14.2366C13.5918 14.7886 13.1438 15.2366 12.5918 15.2366C12.0398 15.2366 11.5918 14.7886 11.5918 14.2366L11.5918 6.1663L7.72852 10.0296C7.33852 10.4206 6.70545 10.4206 6.31445 10.0296L6.22852 9.94364C5.83752 9.55364 5.83752 8.92058 6.22852 8.52958L11.8848 2.87333C12.2748 2.48233 12.9078 2.48233 13.2988 2.87333L18.9551 8.52958ZM6.25 19.4092C5.69772 19.4092 5.25 19.8569 5.25 20.4092C5.25 20.9615 5.69772 21.4092 6.25 21.4092L19.25 21.4092C19.8023 21.4092 20.25 20.9615 20.25 20.4092C20.25 19.8569 19.8023 19.4092 19.25 19.4092L6.25 19.4092Z"
      fill="currentColor"
    />
  </Svg>
);

export const ArrowReceive = ({style, color}: SvgProps) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    style={style}
    color={color}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.43527 8.58008C5.43527 8.83595 5.53469 9.09211 5.73019 9.28711L11.3864 14.9434C11.7774 15.3344 12.4105 15.3344 12.8005 14.9434L18.4568 9.28711C18.8478 8.89611 18.8478 8.26305 18.4568 7.87305L18.3708 7.78711C17.9798 7.39611 17.3468 7.39611 16.9568 7.78711L13.0935 11.6504L13.0935 3.58008C13.0935 3.02808 12.6455 2.58008 12.0935 2.58008C11.5415 2.58008 11.0935 3.02808 11.0935 3.58008L11.0935 11.6504L7.23019 7.78711C6.83919 7.39611 6.20613 7.39611 5.81613 7.78711L5.73019 7.87304C5.53469 8.06855 5.43527 8.3242 5.43527 8.58008ZM4.75 20.4092C4.75 19.8569 5.19772 19.4092 5.75 19.4092L18.75 19.4092C19.3023 19.4092 19.75 19.8569 19.75 20.4092C19.75 20.9615 19.3023 21.4092 18.75 21.4092L5.75 21.4092C5.19772 21.4092 4.75 20.9615 4.75 20.4092Z"
      fill="currentColor"
    />
  </Svg>
);

export const Copy = ({style, color}: SvgProps) => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={style}
    color={color}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4444 2.81473H6.51844C6.10934 2.81473 5.7777 3.14637 5.7777 3.55547V4.29622H9.4814C10.7087 4.29622 11.7036 5.29114 11.7036 6.51844V10.2221H12.4444C12.8535 10.2221 13.1851 9.8905 13.1851 9.4814V3.55547C13.1851 3.14637 12.8535 2.81473 12.4444 2.81473ZM11.7036 11.7036V12.4444C11.7036 13.6717 10.7087 14.6666 9.4814 14.6666H3.55547C2.32818 14.6666 1.33325 13.6717 1.33325 12.4444V6.51844C1.33325 5.29114 2.32817 4.29622 3.55547 4.29622H4.29622V3.55547C4.29622 2.32818 5.29114 1.33325 6.51844 1.33325H12.4444C13.6717 1.33325 14.6666 2.32817 14.6666 3.55547V9.4814C14.6666 10.7087 13.6717 11.7036 12.4444 11.7036H11.7036ZM2.81473 6.51844C2.81473 6.10934 3.14637 5.7777 3.55547 5.7777H9.4814C9.8905 5.7777 10.2221 6.10934 10.2221 6.51844V12.4444C10.2221 12.8535 9.8905 13.1851 9.4814 13.1851H3.55547C3.14637 13.1851 2.81473 12.8535 2.81473 12.4444V6.51844Z"
      fill="currentColor"
    />
  </Svg>
);

export const QRCode = ({style, color}: SvgProps) => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={style}
    color={color}>
    <Path
      d="M3.12544 7.51177H5.71958C6.93297 7.51177 7.51177 6.93995 7.51177 5.70564V3.14636C7.51177 1.91205 6.93297 1.33325 5.71958 1.33325H3.12544C1.91205 1.33325 1.33325 1.91205 1.33325 3.14636V5.70564C1.33325 6.93995 1.91205 7.51177 3.12544 7.51177ZM10.2803 7.51177H12.8744C14.0878 7.51177 14.6666 6.93995 14.6666 5.70564V3.14636C14.6666 1.91205 14.0878 1.33325 12.8744 1.33325H10.2803C9.06686 1.33325 8.48806 1.91205 8.48806 3.14636V5.70564C8.48806 6.93995 9.06686 7.51177 10.2803 7.51177ZM3.03479 6.20076C2.76282 6.20076 2.64427 6.07523 2.64427 5.80327V3.04176C2.64427 2.76979 2.76282 2.64427 3.03479 2.64427H5.81024C6.07523 2.64427 6.20076 2.76979 6.20076 3.04176V5.80327C6.20076 6.07523 6.07523 6.20076 5.81024 6.20076H3.03479ZM10.1896 6.20076C9.91763 6.20076 9.79908 6.07523 9.79908 5.80327V3.04176C9.79908 2.76979 9.91763 2.64427 10.1896 2.64427H12.9651C13.237 2.64427 13.3556 2.76979 13.3556 3.04176V5.80327C13.3556 6.07523 13.237 6.20076 12.9651 6.20076H10.1896ZM3.75306 5.24539H5.085C5.19657 5.24539 5.24539 5.20354 5.24539 5.06407V3.77398C5.24539 3.64845 5.19657 3.59964 5.085 3.59964H3.75306C3.63451 3.59964 3.59964 3.64845 3.59964 3.77398V5.06407C3.59964 5.20354 3.63451 5.24539 3.75306 5.24539ZM10.9288 5.24539H12.2607C12.3793 5.24539 12.4281 5.20354 12.4281 5.06407V3.77398C12.4281 3.64845 12.3793 3.59964 12.2607 3.59964H10.9288C10.8172 3.59964 10.7754 3.64845 10.7754 3.77398V5.06407C10.7754 5.20354 10.8172 5.24539 10.9288 5.24539ZM3.12544 14.6666H5.71958C6.93297 14.6666 7.51177 14.0948 7.51177 12.8604V10.3012C7.51177 9.06686 6.93297 8.48806 5.71958 8.48806H3.12544C1.91205 8.48806 1.33325 9.06686 1.33325 10.3012V12.8604C1.33325 14.0948 1.91205 14.6666 3.12544 14.6666ZM9.0041 10.4476H10.336C10.4546 10.4476 10.5034 10.4058 10.5034 10.2663V8.97621C10.5034 8.85069 10.4546 8.80187 10.336 8.80187H9.0041C8.89253 8.80187 8.85069 8.85069 8.85069 8.97621V10.2663C8.85069 10.4058 8.89253 10.4476 9.0041 10.4476ZM12.7907 10.4476H14.1227C14.2412 10.4476 14.283 10.4058 14.283 10.2663V8.97621C14.283 8.85069 14.2412 8.80187 14.1227 8.80187H12.7907C12.6791 8.80187 12.6373 8.85069 12.6373 8.97621V10.2663C12.6373 10.4058 12.6791 10.4476 12.7907 10.4476ZM3.03479 13.3556C2.76282 13.3556 2.64427 13.23 2.64427 12.9651V10.2035C2.64427 9.9246 2.76282 9.79908 3.03479 9.79908H5.81024C6.07523 9.79908 6.20076 9.9246 6.20076 10.2035V12.9651C6.20076 13.23 6.07523 13.3556 5.81024 13.3556H3.03479ZM10.9148 12.3444H12.2468C12.3653 12.3444 12.4141 12.2956 12.4141 12.1631V10.866C12.4141 10.7405 12.3653 10.6917 12.2468 10.6917H10.9148C10.8033 10.6917 10.7614 10.7405 10.7614 10.866V12.1631C10.7614 12.2956 10.8033 12.3444 10.9148 12.3444ZM3.75306 12.4002H5.085C5.19657 12.4002 5.24539 12.3584 5.24539 12.2189V10.9288C5.24539 10.8033 5.19657 10.7545 5.085 10.7545H3.75306C3.63451 10.7545 3.59964 10.8033 3.59964 10.9288V12.2189C3.59964 12.3584 3.63451 12.4002 3.75306 12.4002ZM9.0041 14.2342H10.336C10.4546 14.2342 10.5034 14.1854 10.5034 14.0529V12.7628C10.5034 12.6303 10.4546 12.5885 10.336 12.5885H9.0041C8.89253 12.5885 8.85069 12.6303 8.85069 12.7628V14.0529C8.85069 14.1854 8.89253 14.2342 9.0041 14.2342ZM12.7907 14.2342H14.1227C14.2412 14.2342 14.283 14.1854 14.283 14.0529V12.7628C14.283 12.6303 14.2412 12.5885 14.1227 12.5885H12.7907C12.6791 12.5885 12.6373 12.6303 12.6373 12.7628V14.0529C12.6373 14.1854 12.6791 14.2342 12.7907 14.2342Z"
      fill="currentColor"
    />
  </Svg>
);

export const QRScanner = ({style, color}: SvgProps) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={style}
    color={color}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8C4 8.55228 3.55228 9 3 9C2.44772 9 2 8.55228 2 8V6C2 3.79086 3.79086 2 6 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H6C4.89543 4 4 4.89543 4 6V8ZM16 4C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2H18C20.2091 2 22 3.79086 22 6V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V6C20 4.89543 19.1046 4 18 4H16ZM2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16V18C4 19.1046 4.89543 20 6 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H6C3.79086 22 2 20.2091 2 18V16ZM20 16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V18C22 20.2091 20.2091 22 18 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H18C19.1046 20 20 19.1046 20 18V16ZM7.5 7.5V9.5H9.5V7.5H7.5ZM7 6C6.44772 6 6 6.44772 6 7V10C6 10.5523 6.44772 11 7 11H10C10.5523 11 11 10.5523 11 10V7C11 6.44772 10.5523 6 10 6H7ZM7.5 16.5V14.5H9.5V16.5H7.5ZM6 14C6 13.4477 6.44772 13 7 13H10C10.5523 13 11 13.4477 11 14V17C11 17.5523 10.5523 18 10 18H7C6.44772 18 6 17.5523 6 17V14ZM14.5 7.5V9.5H16.5V7.5H14.5ZM14 6C13.4477 6 13 6.44772 13 7V10C13 10.5523 13.4477 11 14 11H17C17.5523 11 18 10.5523 18 10V7C18 6.44772 17.5523 6 17 6H14ZM13 13.5C13 13.2239 13.2239 13 13.5 13H14.5C14.7761 13 15 13.2239 15 13.5V14.5C15 14.7761 14.7761 15 14.5 15H13.5C13.2239 15 13 14.7761 13 14.5V13.5ZM16.5 16C16.2239 16 16 16.2239 16 16.5V17.5C16 17.7761 16.2239 18 16.5 18H17.5C17.7761 18 18 17.7761 18 17.5V16.5C18 16.2239 17.7761 16 17.5 16H16.5ZM16 13.5C16 13.2239 16.2239 13 16.5 13H17.5C17.7761 13 18 13.2239 18 13.5V14.5C18 14.7761 17.7761 15 17.5 15H16.5C16.2239 15 16 14.7761 16 14.5V13.5ZM13.5 16C13.2239 16 13 16.2239 13 16.5V17.5C13 17.7761 13.2239 18 13.5 18H14.5C14.7761 18 15 17.7761 15 17.5V16.5C15 16.2239 14.7761 16 14.5 16H13.5Z"
      fill="currentColor"
    />
  </Svg>
);