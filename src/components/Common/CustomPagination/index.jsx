import { Button, Pagination, PaginationItem, Stack } from "@mui/material";
import { CustomPaginationWrapper } from "./styles";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";


export default function CustomPagination({ hideNextButton, hidePrevButton }) {
  return (
    <CustomPaginationWrapper>
      {hidePrevButton && (
        <Button
          startIcon={<ArrowCircleLeftOutlinedIcon className="icons" />}
          size="small"
        >
          Previous
        </Button>
      )}
      <Stack spacing={2}>
        <Pagination
          size="small"
          count={7}
          hidePrevButton={hidePrevButton}
          hideNextButton={hideNextButton}
          renderItem={(item) => <PaginationItem {...item} />}
          variant="container"
        />
        
      </Stack>
      {/* {console.log(item)} */}
     
      {hideNextButton && (
        <Button
          endIcon={<ArrowCircleRightOutlinedIcon className="icons" />}
          size="small"
        >
          Next
        </Button>
      )}
    </CustomPaginationWrapper>
  );
}
