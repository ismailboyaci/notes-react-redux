import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BasicCard from "./BasicCard";

function Notes() {

  const items = useSelector((state) => state.notes.notes);
  const search = useSelector((state) => state.notes.filter);

  

  let filteredItem = search
    ? items.filter((item) => item.title.includes(search))
    : items;
  

  return (
    <div>
      <Typography>{}</Typography>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          {filteredItem
            .filter((item) => item.color === "mavi")
            .map((item) => (
              <BasicCard
                key={item.id}
                name={item.title}
                description={item.description}
                color={item.color}
                id={item.id}
              />
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          {filteredItem
            .filter((item) => item.color === "yesil")
            .map((item) => (
              <BasicCard
                key={item.id}
                name={item.title}
                description={item.description}
                color={item.color}
                id={item.id}
              />
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          {filteredItem
            .filter((item) => item.color === "kirmizi")
            .map((item) => (
              <BasicCard
                key={item.id}
                name={item.title}
                description={item.description}
                color={item.color}
                id={item.id}
              />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Notes;
