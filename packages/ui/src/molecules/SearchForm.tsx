// "use client";

import Input from "../atoms/input";

type SearchFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export default function SearchForm({
  value,
  onChange,
  onSubmit,
}: SearchFormProps) {
  return (
    <form>
      <Input value={value} onChange={onChange} />
      <button type="submit" onSubmit={onSubmit}>
        제출
      </button>
    </form>
  );
}
