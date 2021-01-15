import React from "react";
import { Link } from "gatsby";

function Table() {
  return (
    <section className="max-w-lg">
      <h1 className="font-bold tracking-tight text-2xl my-8 text-gray-900">
        Hey there! Welcome to Enlight fellowship starter project.
      </h1>

      <p className="text-xl text-gray-700 pb-2">
        Take a look at pages/index.js. Within the index page component (the page
        you are looking at right now), there is a component imported from
        ../components/welcome.js. This is where this text is located! Feel free
        to edit the welcome.js component and play around to get a feel for the project.{" "}
      </p>

      <p className="text-xl text-gray-700 py-2">
        Here is a link to another{" "}
        <Link className="text-blue-600" to="pagetwo">
          page
        </Link>{" "}
        to show you how multiple pages in Gatsby work.
      </p>
      <p className="text-xl text-gray-700 py-2">
        When you build your project, you will want to make sure to create
        components in the components folder and import them into index.js to
        display them on the page, just like this component. For example, you can
        create a table.js component or a completionStat.js component!
      </p>

      <p className="text-xl text-gray-700 py-2">
        Please reach out to Samay via Discord or email (samay@enlight.nyc) if
        you have any questions or run into any issues. We are here to help.
      </p>
    </section>
  );
}

export default Table;
