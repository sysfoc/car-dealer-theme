const TextareaFeedbackCard: React.FC<{
  string: string;
  setString: (value: string) => void;
}> = ({ string, setString }) => {
  return (
    <div className="flex flex-col items-end justify-center h-[145px]">
      <textarea
        placeholder="Please tell us more!"
        onChange={(e) => {
          setString(e.target.value);
        }}
        value={string}
        name="good-feedback"
        id=""
        className="w-full px-4 py-2 h-20 outline-none border-[1px] border-gray-300 rounded-md resize-none focus:border-black hover:border-black"
        maxLength={1000}
      ></textarea>
      <div className="text-sm text-gray-600 pt-2">{string.length} / 1000</div>
    </div>
  );
};

export default TextareaFeedbackCard;
