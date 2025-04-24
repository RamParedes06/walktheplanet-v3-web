interface BgSwitchProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const BgSwitchBtn = ({ className, children, onClick }: BgSwitchProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} font-generalSans font-bold text-base cursor-pointer bg-[rgba(255,255,255,0.15)] backdrop-blur-[6.8px] py-[14px] px-[24px] max-w-[240px] w-[240px] border-[1.5px] border-solid border-[rgba(255,255,255,1)] hover:bg-white hover:text-[#00537F]`}
    >
      {children}
    </button>
  );
};

export default BgSwitchBtn;

//clicked:
//bg: #ffffff
//text: #00537F

//idle:
//bg: #ffffff (transparent blurred)
//text: #ffffff
