import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import {
    Tabs,
    Tab,
    Card,
    CardBody,
} from "@nextui-org/react";

export default function HomePage() {
    const [selected, setSelected] = useState("login");

    return (
            <div className="flex flex-col w-full h-screen pt-[120px] bg-gray-900">
                <Card className="max-w-full mx-auto w-[340px] bg-blue-900 ">
                    <CardBody className="overflow-hidden">
                        <Tabs
                            fullWidth
                            size="md"
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                        >
                            <Tab key="login" title="Login">
                                <Login />
                            </Tab>
                            <Tab key="sign-up" title="Sign up">
                                <SignUp />
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
    );
}
