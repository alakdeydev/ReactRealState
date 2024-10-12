import FaqItem from "./FaqItem";
import FaqText from "./FaqText";
// import FaqText from "./FaqText";
import FaqTitle from "./FaqTitle";

export default function FaqCard() {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2">
        <FaqItem>
          <FaqTitle>Is TailGrids Well-documented?-one</FaqTitle>
          <FaqText>
            It takes 2-3 weeks to get your first blog post ready. That includes
            the in-depth research & creation of your monthly content ui/ux
            strategy that we do writing your first blog post.
          </FaqText>
        </FaqItem>
        <FaqItem>
          <FaqTitle>Is TailGrids Well-documented?-Two</FaqTitle>
          <FaqText>
            It takes 3-6 weeks to get your first blog post ready. That includes
            the in-depth research & creation of your monthly content ui/ux
            strategy that we do writing your first blog post.
          </FaqText>
        </FaqItem>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <FaqItem>
          <FaqTitle>Is TailGrids Well-documented?-three</FaqTitle>
          <FaqText>
            It takes 7-9 weeks to get your first blog post ready. That includes
            the in-depth research & creation of your monthly content ui/ux
            strategy that we do writing your first blog post.
          </FaqText>
        </FaqItem>
        <FaqItem>
          <FaqTitle>Is TailGrids Well-documented?-Four</FaqTitle>
          <FaqText>
            It takes 10-12 weeks to get your first blog post ready. That
            includes the in-depth research & creation of your monthly content
            ui/ux strategy that we do writing your first blog post.
          </FaqText>
        </FaqItem>
      </div>
    </>
  );
}
