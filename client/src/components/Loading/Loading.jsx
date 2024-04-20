function Loading({ size }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src="/loading.png"
        alt="Laoding"
        className={`animate-spin  ${
          size ? size : "w-[50px] h-[50px]"
        }    `}
      />
    </div>
  );
}

export default Loading;
