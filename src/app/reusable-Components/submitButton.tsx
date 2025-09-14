export default function SubmitButton({
  onClickItem,
  value,
}: {
  onClickItem?: () => void;
  value?: string;
}) {
  return (
    <button type="button" onClick={onClickItem}>
      {value}
    </button>
  );
}
