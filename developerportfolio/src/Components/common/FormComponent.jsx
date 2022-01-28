import { TextField } from "@material-ui/core"

export const RenderInputText = ({ name, label, state, onChange, multiline, rows}) => {
    const { data } = state
    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth={true}
            name={name}
            value={data[name]}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
        />
    )

}