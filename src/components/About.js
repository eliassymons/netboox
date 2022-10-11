export default function About() {
  return (
    <div className="about-container">
      <h1>About this app</h1>
      <p>
        Netboox is a web application I built to present best selling books in a
        variety of categories. My app dynamically renders a list of the top
        sellers via a call to the New York Times Book API.{" "}
      </p>
      <p>
        This application is designed to mirror the UI experience of Netflix. To
        accomplish this, I used customized React-Bootstrap components, styled
        with SASS. Netboox allows you to add books to your personal list. From
        the "My List" tab, you are able to remove individual items, clear the
        entire list, or visit the amazon link of a book you've chosen.
      </p>
      <p>
        Learn more about me and my work{" "}
        <a
          className="about-link"
          href="https://eliassymons.github.io/eliassymons/"
        >
          here.
        </a>
      </p>
    </div>
  );
}
