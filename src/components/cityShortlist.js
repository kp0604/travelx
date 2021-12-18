import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { useSelector } from "react-redux";
import AutoSizer from "react-virtualized-auto-sizer";
import Typography from "@mui/material/Typography";

const CityShortlist = () => {
  const cityList = useSelector((state) => state.cityList.value);
  const renderRow = ({ index, style }) => {
    return (
      <ListItem style={style} key={index} component="div">
        <ListItemText
          primaryTypographyProps={{ fontSize: 20 }}
          primary={cityList[index]}
        />
      </ListItem>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        bgcolor: "whitesmoke",
      }}
    >
      {cityList.length !== 0 ? (
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              itemSize={40}
              itemCount={100}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      ) : (
        <Typography
          sx={{ padding: 1 }}
          align="center"
          component="div"
          variant="h6"
          component="h2"
        >
          Shortlist Cities...
        </Typography>
      )}
    </Box>
  );
};

export default CityShortlist;
