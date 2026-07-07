import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <PrimaryButton href="#projects">
        View Projects
      </PrimaryButton>

      <SecondaryButton href="/resume.pdf">
        Download CV
      </SecondaryButton>
    </div>
  );
}