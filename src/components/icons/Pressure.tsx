import { FC } from 'react'
import { IconType } from '../../types/IconType'

const PressureIcon: FC<IconType> = ({ width, height }): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 8.33333C73.0125 8.33333 91.6667 26.9875 91.6667 50C91.673 55.4816 90.5946 60.9103 88.4936 65.9732C86.3926 71.0362 83.3105 75.6334 79.425 79.5C77.7583 81.1667 75.05 81.1333 73.425 79.4458L69.9167 75.8083C69.5369 75.4144 69.2385 74.9495 69.0384 74.4402C68.8384 73.9309 68.7406 73.3872 68.7506 72.8401C68.7607 72.293 68.8784 71.7532 69.0971 71.2516C69.3157 70.75 69.631 70.2964 70.025 69.9167C70.8207 69.1497 71.8884 68.7303 72.9933 68.7506C73.5404 68.7607 74.0801 68.8784 74.5817 69.0971C75.0833 69.3157 75.5369 69.631 75.9167 70.025L76.325 70.45C80.1517 65.5233 82.5191 59.6217 83.158 53.4163C83.797 47.2108 82.6817 40.9506 79.9391 35.3476C77.1965 29.7446 72.9366 25.0236 67.644 21.7216C62.3513 18.4196 56.2382 16.669 50 16.669C43.7618 16.669 37.6487 18.4196 32.356 21.7216C27.0634 25.0236 22.8035 29.7446 20.0609 35.3476C17.3183 40.9506 16.2031 47.2108 16.842 53.4163C17.4809 59.6217 19.8483 65.5233 23.675 70.45L24.0833 70.025C24.4631 69.631 24.9167 69.3157 25.4183 69.0971C25.9199 68.8784 26.4596 68.7607 27.0067 68.7506C27.5538 68.7406 28.0975 68.8384 28.6068 69.0384C29.1161 69.2385 29.581 69.5369 29.975 69.9167C30.369 70.2964 30.6843 70.75 30.9029 71.2516C31.1216 71.7532 31.2393 72.293 31.2494 72.8401C31.2594 73.3872 31.1616 73.9309 30.9616 74.4402C30.7615 74.9495 30.4631 75.4144 30.0833 75.8083L26.575 79.4458C26.187 79.8475 25.7229 80.1679 25.2098 80.3884C24.6967 80.6088 24.1448 80.725 23.5864 80.73C23.0279 80.7351 22.474 80.6289 21.957 80.4177C21.44 80.2066 20.9702 79.8946 20.575 79.5C16.6895 75.6334 13.6074 71.0362 11.5064 65.9732C9.40542 60.9103 8.32702 55.4816 8.33334 50C8.33334 26.9875 26.9875 8.33333 50 8.33333ZM50 25C51.1051 25 52.1649 25.439 52.9463 26.2204C53.7277 27.0018 54.1667 28.0616 54.1667 29.1667V51.1167C55.7552 52.0339 56.9968 53.4497 57.6987 55.1445C58.4007 56.8393 58.5238 58.7183 58.049 60.4902C57.5742 62.2621 56.5281 63.8278 55.0728 64.9445C53.6175 66.0612 51.8344 66.6666 50 66.6667C48.1656 66.6666 46.3825 66.0612 44.9272 64.9445C43.4719 63.8278 42.4258 62.2621 41.951 60.4902C41.4762 58.7183 41.5993 56.8393 42.3013 55.1445C43.0032 53.4497 44.2448 52.0339 45.8333 51.1167V29.1667C45.8333 28.0616 46.2723 27.0018 47.0537 26.2204C47.8351 25.439 48.8949 25 50 25V25Z" />
  </svg>
)

export default PressureIcon
