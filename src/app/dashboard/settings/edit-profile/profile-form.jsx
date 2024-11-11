"use client";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const EditProfileForm = ({ user, profile }) => {
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  // Account form schema and form setup
  const accountFormSchema = z.object({
    firstname: z.string().min(1, { message: "First name is required." }),
    lastname: z.string().min(1, { message: "Last name is required." }),
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." }),
  });

  const accountForm = useForm({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      username: user?.username || "",
    },
  });

  const handleAccountSubmit = async (data) => {
    setUpdating(true);
    const res = await updateAcount(data);
    if (res.error) {
      toast.error(res.error);
      setUpdating(false);
    }
    toast.success("Updated successfully!");
    setUpdating(false);
    router.refresh();
    toast.success("Updated successfully!");
  };

  return (
    <Card className="container mx-auto m-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Button
            className="back-button"
            variant="outline"
            size="sm"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-12 h-12" />
          </Button>
          <h1 className="mx-auto">Profile Settings</h1>
        </CardTitle>
        <CardDescription className="text-center">
          Update your account information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...accountForm}>
          <form
            onSubmit={accountForm.handleSubmit(handleAccountSubmit)}
            className="space-y-6"
          >
            <FormField
              control={accountForm.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="submit"
                className="w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={updating}
              >
                Save Changes {updating && <BeatLoader color="green" />}
              </Button>
              <Button
                className="back-button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditProfileForm;
