type SkillsProp = {
  label: string;
  image: string;
};

const Skill = ({ label, image }: SkillsProp) => {
  return (
    <div className="flex items-center gap-4 flex-col">
      {/* Logo */}
      <img
        src={image}
        alt={label}
        className="md:w-20 md:h-20 sm:w-16 sm:h-16 w-16 h-16 object-contain"
      />

      {/* Label */}
      <span className="text-3xl font-bold">{label}</span>
    </div>
  );
};

export default Skill;