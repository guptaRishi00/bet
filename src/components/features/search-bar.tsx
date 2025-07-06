import { SearchInput } from '@/components/inputs';
import { Button } from '@/components/buttons';

export function SearchBar() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-4 gap-y-4">
      <div className="flex-grow flex justify-center">
        <div className="w-[60%] max-w-[860px] min-w-[400px]">
          <SearchInput variant="glow" />
        </div>
      </div>
      <div className="mx-auto">
        <Button variant="gradient" size="xl" rounded="full" className="w-[164px]">
          Tip Slip
        </Button>
      </div>
    </div>
  );
}
