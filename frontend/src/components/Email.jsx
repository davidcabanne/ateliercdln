import styled, { keyframes } from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 200px ${_var.spaceM};
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

const translateAmount = "23vw";

const translation = keyframes`
0% {
transform: translateX(0vw);
}
100% {
  transform: translateX(${translateAmount});
}
`;

const Svg = styled.svg`
  width: 100%;
  max-width: 1450px;
  animation: ${translation} 10000ms ease-in-out alternate infinite;
`;

const Email = () => {
  return (
    <Container>
      <Svg
        viewBox="0 0 1450 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{ marginRight: `${translateAmount}` }}
      >
        <path
          d="M0.707844 83V1.451H11.0038V36.434H51.2518V1.451H61.5478V83H51.2518V46.028H11.0038V83H0.707844ZM80.0028 83V1.451H133.706V10.694H90.2988V36.785H129.728V46.028H90.2988V73.757H133.706V83H80.0028ZM148.443 83V1.451H158.739V73.757H195.243V83H148.443ZM206.372 83V1.451H216.668V73.757H253.172V83H206.372ZM293.212 84.404C285.724 84.404 279.133 82.649 273.439 79.139C267.823 75.629 263.416 70.715 260.218 64.397C257.098 58.079 255.538 50.708 255.538 42.284C255.538 33.782 257.098 26.372 260.218 20.054C263.416 13.736 267.823 8.822 273.439 5.312C279.133 1.80199 285.724 0.046994 293.212 0.046994C300.856 0.046994 307.525 1.80199 313.219 5.312C318.913 8.822 323.32 13.736 326.44 20.054C329.638 26.372 331.237 33.782 331.237 42.284C331.237 50.708 329.638 58.079 326.44 64.397C323.242 70.715 318.796 75.629 313.102 79.139C307.408 82.649 300.778 84.404 293.212 84.404ZM293.212 74.576C298.906 74.576 303.781 73.25 307.837 70.598C311.971 67.946 315.169 64.202 317.431 59.366C319.693 54.53 320.824 48.836 320.824 42.284C320.824 35.654 319.693 29.921 317.431 25.085C315.169 20.249 311.971 16.505 307.837 13.853C303.781 11.201 298.906 9.875 293.212 9.875C287.674 9.875 282.838 11.201 278.704 13.853C274.57 16.427 271.372 20.132 269.11 24.968C266.926 29.804 265.834 35.576 265.834 42.284C265.834 48.914 266.926 54.647 269.11 59.483C271.372 64.319 274.57 68.063 278.704 70.715C282.838 73.289 287.674 74.576 293.212 74.576ZM388.455 95.519C382.371 95.519 376.638 94.427 371.256 92.243C365.952 90.059 361.272 86.978 357.216 83C353.238 79.1 350.079 74.498 347.739 69.194C345.477 63.89 344.346 58.118 344.346 51.878C344.346 45.482 345.438 39.593 347.622 34.211C349.884 28.751 353.004 24.032 356.982 20.054C361.038 15.998 365.718 12.878 371.022 10.694C376.404 8.432 382.215 7.301 388.455 7.301C394.773 7.301 400.584 8.432 405.888 10.694C411.27 12.878 415.95 15.959 419.928 19.937C423.906 23.837 426.987 28.439 429.171 33.743C431.355 39.047 432.447 44.78 432.447 50.942C432.447 55.622 431.862 59.717 430.692 63.227C429.522 66.737 427.689 69.506 425.193 71.534C422.775 73.484 419.616 74.459 415.716 74.459C412.908 74.459 410.49 73.952 408.462 72.938C406.434 71.846 404.874 70.442 403.782 68.726C402.69 67.01 402.144 65.138 402.144 63.11V59.483L404.133 62.408C402.495 66.698 399.96 69.857 396.528 71.885C393.096 73.835 389.469 74.81 385.647 74.81C381.669 74.81 378.081 73.874 374.883 72.002C371.685 70.052 369.15 67.4 367.278 64.046C365.406 60.614 364.47 56.636 364.47 52.112C364.47 47.51 365.406 43.493 367.278 40.061C369.15 36.629 371.685 33.977 374.883 32.105C378.081 30.155 381.669 29.18 385.647 29.18C389.469 29.18 392.823 30.155 395.709 32.105C398.673 33.977 400.896 36.707 402.378 40.295L401.325 39.476L402.378 30.116H409.983V59.015C409.983 61.745 410.49 63.734 411.504 64.982C412.518 66.23 414.195 66.854 416.535 66.854C419.577 66.854 421.761 65.489 423.087 62.759C424.491 59.951 425.193 56.051 425.193 51.059C425.193 45.755 424.257 40.919 422.385 36.551C420.591 32.105 418.056 28.244 414.78 24.968C411.504 21.692 407.604 19.157 403.08 17.363C398.634 15.569 393.759 14.672 388.455 14.672C383.307 14.672 378.471 15.608 373.947 17.48C369.501 19.274 365.601 21.848 362.247 25.202C358.971 28.478 356.397 32.378 354.525 36.902C352.653 41.426 351.717 46.418 351.717 51.878C351.717 57.104 352.653 61.94 354.525 66.386C356.475 70.754 359.127 74.576 362.481 77.852C365.835 81.128 369.735 83.663 374.181 85.457C378.627 87.329 383.385 88.265 388.455 88.265C395.163 88.265 401.598 86.432 407.76 82.766L411.153 89.201C407.877 91.307 404.25 92.867 400.272 93.881C396.372 94.973 392.433 95.519 388.455 95.519ZM387.519 66.971C390.171 66.971 392.472 66.347 394.422 65.099C396.45 63.851 398.049 62.135 399.219 59.951C400.389 57.689 400.974 55.076 400.974 52.112C400.974 49.07 400.389 46.418 399.219 44.156C398.049 41.894 396.45 40.139 394.422 38.891C392.472 37.643 390.171 37.019 387.519 37.019C384.945 37.019 382.605 37.682 380.499 39.008C378.471 40.256 376.872 42.011 375.702 44.273C374.532 46.535 373.947 49.148 373.947 52.112C373.947 54.998 374.532 57.572 375.702 59.834C376.872 62.096 378.471 63.851 380.499 65.099C382.605 66.347 384.945 66.971 387.519 66.971ZM441.459 83L472.581 1.451H480.771L511.893 83H500.661L476.793 16.193L452.808 83H441.459ZM458.775 63.812L461.934 54.569H491.418L494.811 63.812H458.775ZM532.016 83V10.694H504.638V1.451H569.69V10.694H542.429V83H532.016ZM580.795 83V1.451H634.498V10.694H591.091V36.785H630.52V46.028H591.091V73.757H634.498V83H580.795ZM649.235 83V1.451H659.531V73.757H696.035V83H649.235ZM707.164 83V1.451H717.46V83H707.164ZM735.957 83V1.451H789.66V10.694H746.253V36.785H785.682V46.028H746.253V73.757H789.66V83H735.957ZM804.397 83V1.451H828.733C834.973 1.451 840.082 2.387 844.06 4.259C848.038 6.053 851.002 8.666 852.952 12.098C854.902 15.53 855.877 19.625 855.877 24.383C855.877 31.169 853.927 36.551 850.027 40.529C846.127 44.429 840.472 46.73 833.062 47.432C831.892 47.51 830.488 47.549 828.85 47.549C827.212 47.549 825.613 47.549 824.053 47.549H814.693V83H804.397ZM850.027 83L828.85 46.262L839.38 44.975L861.844 83H850.027ZM814.693 38.423H827.68C831.268 38.423 834.388 37.955 837.04 37.019C839.692 36.083 841.759 34.601 843.241 32.573C844.801 30.545 845.581 27.854 845.581 24.5C845.581 21.068 844.801 18.377 843.241 16.427C841.759 14.399 839.653 12.956 836.923 12.098C834.271 11.162 831.19 10.694 827.68 10.694H814.693V38.423ZM906.776 84.404C899.288 84.404 892.697 82.649 887.003 79.139C881.387 75.629 876.98 70.715 873.782 64.397C870.662 58.001 869.102 50.591 869.102 42.167C869.102 33.743 870.662 26.372 873.782 20.054C876.98 13.736 881.387 8.822 887.003 5.312C892.697 1.80199 899.288 0.046994 906.776 0.046994C914.966 0.046994 922.064 2.075 928.07 6.131C934.076 10.187 938.405 15.803 941.057 22.979L931.463 26.606C929.435 21.302 926.315 17.207 922.103 14.321C917.891 11.357 912.782 9.875 906.776 9.875C901.238 9.875 896.402 11.201 892.268 13.853C888.134 16.505 884.936 20.249 882.674 25.085C880.49 29.843 879.398 35.537 879.398 42.167C879.398 48.797 880.49 54.53 882.674 59.366C884.936 64.202 888.134 67.946 892.268 70.598C896.402 73.25 901.238 74.576 906.776 74.576C912.782 74.576 917.891 73.094 922.103 70.13C926.315 67.166 929.435 63.071 931.463 57.845L941.057 61.355C938.405 68.453 934.076 74.069 928.07 78.203C922.064 82.337 914.966 84.404 906.776 84.404ZM954.875 83V1.451H977.456C990.794 1.451 1001.13 5.078 1008.46 12.332C1015.79 19.508 1019.46 29.687 1019.46 42.869C1019.46 55.817 1015.83 65.762 1008.58 72.704C1001.32 79.568 990.911 83 977.339 83H954.875ZM965.171 73.523H976.403C983.345 73.523 989.234 72.509 994.07 70.481C998.984 68.375 1002.69 65.06 1005.18 60.536C1007.76 55.934 1009.05 49.928 1009.05 42.518C1009.05 35.108 1007.76 29.102 1005.18 24.5C1002.69 19.82 999.062 16.388 994.304 14.204C989.624 12.02 983.969 10.928 977.339 10.928H965.171V73.523ZM1034.63 83V1.451H1044.92V73.757H1081.43V83H1034.63ZM1092.56 83V1.451H1103.44L1145.21 69.662H1142.87V1.451H1153.16V83H1142.05L1100.51 14.672H1102.85V83H1092.56ZM1170.57 83V69.428H1182.27V83H1170.57ZM1234.01 84.404C1226.52 84.404 1219.93 82.649 1214.24 79.139C1208.62 75.629 1204.21 70.715 1201.02 64.397C1197.9 58.001 1196.34 50.591 1196.34 42.167C1196.34 33.743 1197.9 26.372 1201.02 20.054C1204.21 13.736 1208.62 8.822 1214.24 5.312C1219.93 1.80199 1226.52 0.046994 1234.01 0.046994C1242.2 0.046994 1249.3 2.075 1255.3 6.131C1261.31 10.187 1265.64 15.803 1268.29 22.979L1258.7 26.606C1256.67 21.302 1253.55 17.207 1249.34 14.321C1245.13 11.357 1240.02 9.875 1234.01 9.875C1228.47 9.875 1223.64 11.201 1219.5 13.853C1215.37 16.505 1212.17 20.249 1209.91 25.085C1207.72 29.843 1206.63 35.537 1206.63 42.167C1206.63 48.797 1207.72 54.53 1209.91 59.366C1212.17 64.202 1215.37 67.946 1219.5 70.598C1223.64 73.25 1228.47 74.576 1234.01 74.576C1240.02 74.576 1245.13 73.094 1249.34 70.13C1253.55 67.166 1256.67 63.071 1258.7 57.845L1268.29 61.355C1265.64 68.453 1261.31 74.069 1255.3 78.203C1249.3 82.337 1242.2 84.404 1234.01 84.404ZM1316.39 84.404C1308.9 84.404 1302.31 82.649 1296.62 79.139C1291 75.629 1286.59 70.715 1283.4 64.397C1280.28 58.079 1278.72 50.708 1278.72 42.284C1278.72 33.782 1280.28 26.372 1283.4 20.054C1286.59 13.736 1291 8.822 1296.62 5.312C1302.31 1.80199 1308.9 0.046994 1316.39 0.046994C1324.03 0.046994 1330.7 1.80199 1336.4 5.312C1342.09 8.822 1346.5 13.736 1349.62 20.054C1352.82 26.372 1354.42 33.782 1354.42 42.284C1354.42 50.708 1352.82 58.079 1349.62 64.397C1346.42 70.715 1341.97 75.629 1336.28 79.139C1330.59 82.649 1323.96 84.404 1316.39 84.404ZM1316.39 74.576C1322.08 74.576 1326.96 73.25 1331.02 70.598C1335.15 67.946 1338.35 64.202 1340.61 59.366C1342.87 54.53 1344 48.836 1344 42.284C1344 35.654 1342.87 29.921 1340.61 25.085C1338.35 20.249 1335.15 16.505 1331.02 13.853C1326.96 11.201 1322.08 9.875 1316.39 9.875C1310.85 9.875 1306.02 11.201 1301.88 13.853C1297.75 16.427 1294.55 20.132 1292.29 24.968C1290.1 29.804 1289.01 35.576 1289.01 42.284C1289.01 48.914 1290.1 54.647 1292.29 59.483C1294.55 64.319 1297.75 68.063 1301.88 70.715C1306.02 73.289 1310.85 74.576 1316.39 74.576ZM1369.63 83V1.451H1384.84L1410.46 65.918H1408.59L1434.21 1.451H1449.31V83H1439.01V13.385L1439.83 13.502L1414.56 76.097H1404.5L1379.11 13.502L1379.93 13.385V83H1369.63Z"
          fill="black"
        />
      </Svg>
    </Container>
  );
};

export default Email;
