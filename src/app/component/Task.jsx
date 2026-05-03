
// import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

import React from 'react';

const Task = ({task}) => {
    const {task_name, category, priority, status, assigned_to} = task;
    return (
        <div>

            <Card  variant="primary" className="border-2 border-primary">
                {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
                <Card.Header>
                    <Card.Title>{task_name}</Card.Title>
                    <Card.Description>
                        Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
                        followers.
                    </Card.Description>
                    <p>{priority}</p>
                    <p>{status}</p>
                    <p>{assigned_to}</p>
                </Card.Header>
                <Card.Footer>
                    <Link
                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                        href="https://heroui.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Creator Hub
                        <Link.Icon aria-hidden="true" />
                    </Link>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Task;