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
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setItem } from "../../state/data/dataSlice";

const Form = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imagePath: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(setItem(formData));
      onOpenChange();
      setFormData({ title: "", description: "", imagePath: "" });
    },
    [dispatch, formData, onOpenChange]
  );

  const handleCancel = useCallback(() => {
    onOpenChange();
    setFormData({ title: "", description: "", imagePath: "" });
  }, [onOpenChange]);

  return (
    <div data-testid="form">
      <Button
        onPress={() => onOpenChange()}
        className="border-2 py-2 px-4 cursor-pointer rounded-3xl text-cream bg-blue hover:bg-skyBlue w-full"
      >
        Add item
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Add new item to the list
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                data-testid="imagePath"
                label="Image Address"
                placeholder="Enter image address"
                variant="bordered"
                isRequired
                value={formData.imagePath}
                onChange={handleChange}
                name="imagePath"
              />
              <Input
                label="Title"
                data-testid="title"
                placeholder="Enter the title"
                variant="bordered"
                isRequired
                value={formData.title}
                onChange={handleChange}
                name="title"
              />
              <Textarea
                label="Description"
                data-testid="description"
                variant="bordered"
                placeholder="Enter your description"
                disableAnimation
                disableAutosize
                isRequired
                value={formData.description}
                onChange={handleChange}
                name="description"
                classNames={{
                  base: "w-xs",
                  input: "resize-y min-h-[40px]",
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={handleCancel}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Form;
