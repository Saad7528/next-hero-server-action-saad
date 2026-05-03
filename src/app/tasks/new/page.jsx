import { newTaskAction } from '@/app/lib/actions';
import { Input, Label, TextField, Select, ListBox, Button, Form, FieldError } from '@heroui/react';
import React from 'react';

const NewTask = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-5xl font-bold mb-5">Add A New Task</h1>
            <Form action={newTaskAction} className="flex flex-col gap-4">
                <TextField
                    isRequired
                    minLength={8}
                    className="w-full" name="task_name" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                     <FieldError />
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

                <Button slot="close" variant="secondary">
                    Cancel
                </Button>
                <Button type="submit">Submit</Button>

            </Form>

        </div>
    );
};

export default NewTask;