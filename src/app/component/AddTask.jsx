"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

export function AddTask({ createATask }) {
    return (
        <Modal>
            <Button variant="secondary">Add Task</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and well get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="task_name" type="text">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter your Title" />
                                    </TextField>
                                    <TextField className="w-full" name="description" type="text">
                                        <Label>The Description</Label>
                                        <Input placeholder="Enter your Description" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Select name="priority" className="w-[256px]" placeholder="Select one">
                                            <Label>Priority</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="low" textValue="Low">
                                                        Low
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="medium" textValue="medium">
                                                        Medium
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="high" textValue="High">
                                                        High
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </TextField>
                                    <TextField className="w-full" name="status">
                                        <Label>Status</Label>
                                        <Select name="status" className="w-[256px]" placeholder="Select one">
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="todo" textValue="Todo">
                                                        Todo
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="inProgress" textValue="In Progress">
                                                        In Progress
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="completed" textValue="Completed">
                                                        Completed
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </TextField>
                                    <TextField className="w-full" name="assigned_to">
                                        <Label>Assigned To</Label>
                                        <Input placeholder="Assigned To" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Submit</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}