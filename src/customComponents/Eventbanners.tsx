export function EventBannersHomePage({
  brandLogo,
  brandName,
}: {
  brandName: string;
  brandLogo: string;
}) {
  return (
    <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] w-full max-h-[96px] min-h-[96px]">
      <div
        className="h-full w-full rounded-[11px] text-white"
        style={{
          background: 'linear-gradient(90deg, #080809 0%, #535354 100%)',
        }}
      >
        <div className="w-full flex items-center justify-between px-4">
          <p className="text-white font-poppins font-medium text-[24px] leading-[36px] text-center align-middle">
            {brandName}
          </p>

          <img src={brandLogo} alt={brandName} className="w-[87px] h-auto" />
        </div>
      </div>
    </div>
  );
}
