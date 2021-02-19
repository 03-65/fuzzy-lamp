// @flow

import React from "react";

const Fees = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.75 21.25H9.7565H9.7634H9.7703H9.7772H9.7841H9.7911H9.798H9.805H9.8121H9.8191H9.8262H9.8333H9.8404H9.8475H9.8547H9.8619H9.8691H9.8763H9.8836H9.8908H9.8981H9.9054H9.9128H9.9201H9.9275H9.9349H9.9423H9.9497H9.9572H9.9647H9.9722H9.9797H9.9872H9.9948H10.0024H10.01H10.0176H10.0253H10.0329H10.0406H10.0483H10.056H10.0638H10.0715H10.0793H10.0871H10.0949H10.1027H10.1106H10.1184H10.1263H10.1342H10.1422H10.1501H10.1581H10.166H10.174H10.182H10.1901H10.1981H10.2062H10.2143H10.2224H10.2305H10.2386H10.2468H10.2549H10.2631H10.2713H10.2795H10.2878H10.296H10.3043H10.3126H10.3209H10.3292H10.3375H10.3458H10.3542H10.3626H10.371H10.3794H10.3878H10.3962H10.4046H10.4131H10.4216H10.4301H10.4386H10.4471H10.4556H10.4642H10.4727H10.4813H10.4899H10.4985H10.5071H10.5157H10.5244H10.533H10.5417H10.5504H10.5591H10.5678H10.5765H10.5852H10.594H10.6027H10.6115H10.6203H10.6291H10.6379H10.6467H10.6555H10.6644H10.6732H10.6821H10.6909H10.6998H10.7087H10.7176H10.7265H10.7355H10.7444H10.7533H10.7623H10.7713H10.7802H10.7892H10.7982H10.8072H10.8163H10.8253H10.8343H10.8434H10.8524H10.8615H10.8706H10.8796H10.8887H10.8978H10.9069H10.916H10.9252H10.9343H10.9434H10.9526H10.9618H10.9709H10.9801H10.9893H10.9985H11.0077H11.0169H11.0261H11.0353H11.0445H11.0537H11.063H11.0722H11.0815H11.0907H11.1H11.1093H11.1185H11.1278H11.1371H11.1464H11.1557H11.165H11.1743H11.1836H11.1929H11.2023H11.2116H11.2209H11.2303H11.2396H11.249H11.2583H11.2677H11.2771H11.2864H11.2958H11.3052H11.3145H11.3239H11.3333H11.3427H11.3521H11.3615H11.3709H11.3803H11.3897H11.3991H11.4085H11.4179H11.4274H11.4368H11.4462H11.4556H11.4651H11.4745H11.4839H11.4934H11.5028H11.5122H11.5217H11.5311H11.5405H11.55H11.5594H11.5689H11.5783H11.5878H11.5972H11.6067H11.6161H11.6256H11.635H11.6445H11.6539H11.6634H11.6728H11.6822H11.6917H11.7011H11.7106H11.72H11.7295H11.7389H11.7484H11.7578H11.7673H11.7767H11.7861H11.7956H11.805H11.8144H11.8239H11.8333H11.8427H11.8521H11.8616H11.871H11.8804H11.8898H11.8992H11.9086H11.918H11.9274H11.9368H11.9462H11.9556H11.965H11.9744H11.9838H11.9932H12.0025H12.0119H12.0213H12.0306H12.04H12.0494H12.0587H12.0681H12.0774H12.0867H12.0961H12.1054H12.1147H12.124H12.1333H12.1426H12.1519H12.1612H12.1705H12.1798H12.1891H12.1983H12.2076H12.2168H12.2261H12.2353H12.2446H12.2538H12.263H12.2722H12.2814H12.2906H12.2998H12.309H12.3182H12.3274H12.3365H12.3457H12.3548H12.364H12.3731H12.3822H12.3913H12.4004H12.4095H12.4186H12.4277H12.4368H12.4458H12.4549H12.4639H12.473H12.482H12.491H12.5C14.2501 21.25 15.9193 20.2101 17.1836 18.3557C18.4454 16.5051 19.25 13.9067 19.25 11C19.25 8.09329 18.4454 5.49493 17.1836 3.64433C15.9193 1.78992 14.2501 0.75 12.5 0.75H9.0721H9.75"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 11C15.5 13.755 14.6857 16.1882 13.4438 17.8959C12.2007 19.6051 10.611 20.5 9 20.5C7.389 20.5 5.7993 19.6051 4.55625 17.8959C3.31427 16.1882 2.5 13.755 2.5 11C2.5 8.24503 3.31427 5.81181 4.55625 4.10408C5.7993 2.39489 7.389 1.5 9 1.5C10.611 1.5 12.2007 2.39489 13.4438 4.10408C14.6857 5.81181 15.5 8.24503 15.5 11ZM16.7925 13.5C16.9018 12.8534 16.9696 12.1848 16.9919 11.5H19V10.5H16.9919C16.9696 9.81518 16.9018 9.14665 16.7925 8.5H19V7.5H16.5865C16.4156 6.79918 16.1947 6.12985 15.9297 5.5H18V4.5H15.4546C15.268 4.15038 15.0668 3.81648 14.8522 3.5H17V2.5H14.0783C12.6969 0.9379 10.9281 0 9 0C4.58172 0 1 4.92487 1 11C1 17.0751 4.58172 22 9 22C10.9281 22 12.6969 21.0621 14.0783 19.5H17V18.5H14.8522C15.0668 18.1835 15.268 17.8496 15.4546 17.5H18V16.5H15.9297C16.1947 15.8702 16.4156 15.2008 16.5865 14.5H19V13.5H16.7925Z"
      fill="currentColor"
    />
    <path
      d="M12 10H6C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10Z"
      fill="currentColor"
    />
  </svg>
);

export default Fees;
