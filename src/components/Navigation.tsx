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

const Navigation = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <nav className="flex flex-col lg:flex-row justify-between w-full gap-4 py-8 lg:py-0">
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
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add new item to the list
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Image URL"
                    placeholder="Enter the image URL"
                    variant="bordered"
                  />
                  <Input
                    label="Title"
                    placeholder="Enter the title"
                    variant="bordered"
                  />
                  <Input
                    label="Desctiption"
                    placeholder="Enter the description"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Add
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Search />
      </div>
    </nav>
  );
};

export default Navigation;
