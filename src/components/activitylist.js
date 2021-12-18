import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

const ActivityList = () => {
  const [actList, setactList] = useState([]);

  const initialFetch = async () => {
    let task4res = await fetch(
      "http://my-json-server.typicode.com/rivitest001/task04/posts"
    );

    let task4 = await task4res.json();

    setactList(task4);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const isItemLoaded = (index) => (actList[index] ? true : false);

  const Row = (props) => {
    const { index, style } = props;

    return (
      <ListItem
        style={style}
        key={index}
        sx={{
          bgcolor: "whitesmoke",
        }}
        component="div"
        disablePadding
      >
        <ListItemButton>
          <ListItemText
            primary={actList[index] ? actList[index].activity : "Loading..."}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  const loadMore = async (startIndex, stopIndex) => {
    startIndex = 91 - startIndex;
    stopIndex = 100 - stopIndex;

    return new Promise(async (resolve) => {
      switch (true) {
        case startIndex >= 1 && stopIndex <= 30:
          let task1res = await fetch(
            `http://my-json-server.typicode.com/rivitest001/task01/posts?id_gte=${startIndex}&id_lte=${stopIndex}`
          );

          let task1 = await task1res.json();

          await setactList(actList.concat(task1));

          break;

        case startIndex >= 31 && stopIndex <= 60:
          let task2res = await fetch(
            `http://my-json-server.typicode.com/rivitest001/task02/posts?id_gte=${startIndex}&id_lte=${stopIndex}`
          );

          let task2 = await task2res.json();

          await setactList(actList.concat(task2));

          break;

        case startIndex >= 61 && stopIndex <= 90:
          let task3res = await fetch(
            `http://my-json-server.typicode.com/rivitest001/task03/posts?id_gte=${startIndex}&id_lte=${stopIndex}`
          );

          let task3 = await task3res.json();

          await setactList(actList.concat(task3));

          break;

        default:
          return;
      }

      resolve();
    });
  };

  return (
    <Box
      sx={{
        height: 400,
        bgcolor: "whitesmoke",
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            loadMoreItems={loadMore}
            itemCount={actList.length + 1}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                height={height}
                itemCount={actList.length}
                itemSize={40}
                width={width}
                ref={ref}
                onItemsRendered={onItemsRendered}
              >
                {Row}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Box>
  );
};

export default ActivityList;
