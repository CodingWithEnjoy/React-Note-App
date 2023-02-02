import "./PageFooter.scss";

function PageFooter(): JSX.Element {
  return (
    <footer>
      <p>
        Created By{" "}
        <a
          className="rising-background"
          href="https://github.com/CodingWithEnjoy"
          target="_blank"
          rel="noreferrer"
        >
          Coding With Enjoy
        </a>
      </p>
    </footer>
  );
}

export default PageFooter;
