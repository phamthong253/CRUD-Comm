/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function DeleteModal(props) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Delete User
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Cảnh báo !!</DialogHeader>
        <DialogBody divider>
         Hành vi này có thể gây nguy hiểm đến hệ thống, bạn chắc chắn có muốn xóa User này không ??
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={props.sendData}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}