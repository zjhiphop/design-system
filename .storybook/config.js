import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  options: {
    showRoots: true
  }
});

// automatically import all files ending in *.stories.js
configure(
  [
    require.context("../src", true, /\.stories\.mdx$/),
    require.context("../src", true, /\.stories\.js$/)
  ],
  module
);
