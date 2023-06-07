import Button from "@/components/ui/button";
import { SearchIcon } from "@/assets/icons/search";
import { useModal } from "@/components/modal-views/context";

export default function SearchButton({ ...props }) {
  // const { openModal } = useModal();
  return (
    <Button shape="circle" aria-label="Search" {...props}>
      <SearchIcon className="h-auto w-3.5 sm:w-auto" />
    </Button>
  );
}
