const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 7a5 5 0 0 1 5-5h8.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 22 8.828V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7Zm6-1V4h6v2H8Zm8 1V4.414l3.707 3.707a1 1 0 0 1 .293.707V17a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7c0-1.306.835-2.417 2-2.83V7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1Z'
      fill='#152C70'
    />
  </svg>
)

export default SvgComponent
