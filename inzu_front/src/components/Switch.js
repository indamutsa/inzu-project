import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function SwitchCComp() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="secondary" />}
          label="Open house"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}
