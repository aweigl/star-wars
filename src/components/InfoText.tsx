export const InfoText = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-yellow-500 text-xs uppercase tracking-widest">
        {label}
      </span>
      <span className="font-semibold text-yellow-300">{value}</span>
    </div>
  );
};
