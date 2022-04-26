import "../styles/about.scss";
import { useTheme } from "../hooks/useTheme";

export default function About() {
  const { color } = useTheme();
  return (
    <main className="about">
      <h2 className="about-title" style={{ color: color }}>
        Father learns that his daughter can predict the future. What happens
        next is shocking!
      </h2>
      <p className="about-p">
        A Father put his 3year old daughter to bed, told her a story and
        listened to her prayers which ended by saying, "God bless Mommy, God
        bless Daddy, God bless Grandma and good-bye Grandpa." <br></br>{" "}
        <br></br> The father asked, 'Why did you say good-bye Grandpa?' The
        little girl said, "I don't know daddy, it just seemed like the thing to
        do." The next day grandpa died. The father thought it was a strange
        coincidence.
        <br></br> <br></br>A few months later the father put the girl to bed and
        listened to her prayers which went like this, "God bless Mommy, God
        Bless Daddy and good-bye Grandma." The next day the grandmother died.
        "Holy crap" thought the father, "this kid is in contact with the other
        side."
        <br></br> <br></br> Several weeks later when the girl was going to bed
        the dad heard her say, "God bless Mommy and good-bye Daddy." He
        practically went into shock. He couldn't sleep all night and got up at
        the crack of dawn to go to his office. He was nervous as a cat all day,
        had lunch and watched the clock.. He figured if he could get by until
        midnight he would be okay. <br></br> <br></br>He felt safe in the
        office, so instead of going home at the end of the day he stayed there,
        drinking coffee, looking at his watch and jumping at every sound.
        Finally midnight arrived; he breathed a sigh of relief and went home.{" "}
        <br></br> <br></br> When he got home his wife said, "I've never seen you
        work so late. What's the matter?" He said, "I don't want to talk about
        it, I've just spent the worst day of my life." She said, "You think you
        had a bad day, you'll never believe what happened to me. This morning
        <span style={{ color: color }}> the mailman</span> dropped dead on our
        porch!"
      </p>
    </main>
  );
}
