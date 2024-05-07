/* eslint-disable @typescript-eslint/no-explicit-any */
import Search from "./Search";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setItem } from "../state/data/dataSlice";

const Navigation = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePath, setImagePath] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ITEMS OBJECT::", { title, description, imagePath });
    dispatch(setItem({ title, description, imagePath }));
    onOpenChange(); // Remove the argument from the function call
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between w-full gap-4 py-8 lg:py-0 mb-4">
      <h1 className="text-3xl font-bold text-blue w-full flex items-center justify-center lg:justify-start">
        Items Grid
      </h1>
      <div className="flex flex-row gap-2 w-full justify-end">
        <Button
          onPress={onOpen}
          className="border-2 py-2 px-4 cursor-pointer rounded-3xl border-cream text-cream bg-blue hover:bg-skyBlue"
        >
          Add item
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <form onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Add new item to the list
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Image URL"
                    placeholder="Enter the image URL"
                    variant="bordered"
                    isRequired
                    value={imagePath}
                    onChange={(e) => setImagePath(e.target.value)}
                  />
                  <Input
                    label="Title"
                    placeholder="Enter the title"
                    variant="bordered"
                    isRequired
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Textarea
                    label="Description"
                    variant="bordered"
                    placeholder="Enter your description"
                    disableAnimation
                    disableAutosize
                    isRequired
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    classNames={{
                      base: "w-xs",
                      input: "resize-y min-h-[40px]",
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit" onPress={handleSubmit}>
                    Add
                  </Button>
                </ModalFooter>
              </form>
            )}
          </ModalContent>
        </Modal>
        <Search />
      </div>
    </nav>
  );
};

export default Navigation;
