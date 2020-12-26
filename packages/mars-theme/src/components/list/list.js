import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import FeaturedMedia from "../featured-media"

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      <FeaturedMedia id={7} />
      <main>
        {/* If the list is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <Header>
            {data.taxonomy}:{" "}
            <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
          </Header>
        )}

        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <Header>
            Author: <b>{decode(state.source.author[data.id].name)}</b>
          </Header>
        )}

        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
        <Pagination />
      </main>
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  max-width: 1920px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  main {
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
    padding: 24px;
  }
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
