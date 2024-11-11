"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Building, MapPin, Mail, Phone, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { updateProfile } from "@/actions/updateProfile";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { updateAcount } from "@/actions/updateAccount";

const SettingsDashboardPage = ({ user, profile }) => {
  const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] =
    useState(true);
  const [isSmsNotificationsEnabled, setIsSmsNotificationsEnabled] =
    useState(false);

  const [updating, setUpdating] = useState(false);

  const router = useRouter();

  // Profile form schema and form setup
  const profileFormSchema = z.object({
    farmName: z
      .string()
      .min(2, { message: "Farm name must be at least 2 characters." }),
    bio: z.string().max(160).min(4),
    location: z.string().optional(),
    contactEmail: z
      .string()
      .email({ message: "Please enter a valid email address." }),
    contactNumber: z.string().optional(),
    link: z.string().url({ message: "Please enter a valid URL." }).optional(),
  });

  const profileForm = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      farmName: profile?.farmName || "",
      bio: profile?.bio || "",
      location: profile?.location || "",
      contactEmail: profile?.contactEmail || "",
      contactNumber: profile?.contactNumber || "",
      link: profile?.link || "",
    },
  });

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

  const handleProfileSubmit = async (data) => {
    setUpdating(true);
    const res = await updateProfile(data);
    if (res.error) {
      toast.error(res.error);
      setUpdating(false);
    }
    toast.success("Updated successfully!");
    setUpdating(false);
    router.refresh();
  };

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
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          {/* <TabsTrigger value="account">Account</TabsTrigger> */}
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your public profile information. This information will be
                displayed on your farmer profile page.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...profileForm}>
                <form
                  onSubmit={profileForm.handleSubmit(handleProfileSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

                  <FormField
                    control={profileForm.control}
                    name="farmName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Farm Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              className="pl-8"
                              placeholder="Green Acres Farm"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          The name of your farm or business
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={profileForm.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell customers about your farm and what you grow..."
                            className="resize-none min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Write a brief description about your farm and farming
                          practices
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={profileForm.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              className="pl-8"
                              placeholder="123 Farm Road, Rural County"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Your farm&apos;s location or service area
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={profileForm.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                className="pl-8"
                                type="email"
                                placeholder="contact@myfarm.com"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                className="pl-8"
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={profileForm.control}
                    name="link"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <LinkIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              className="pl-8"
                              placeholder="https://www.myfarm.com"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Your farm&apos;s website or social media profile
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={updating}
                  >
                    Save Changes {updating && <BeatLoader color="green" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        {/* <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
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
                  <Button
                    type="submit"
                    className="w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={updating}
                  >
                    Save Changes {updating && <BeatLoader color="green" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent> */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose how you want to be notified about updates and activities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications about your account activity.
                  </p>
                </div>
                <Switch
                  checked={isEmailNotificationsEnabled}
                  onCheckedChange={setIsEmailNotificationsEnabled}
                />
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive SMS notifications about your account activity.
                  </p>
                </div>
                <Switch
                  checked={isSmsNotificationsEnabled}
                  onCheckedChange={setIsSmsNotificationsEnabled}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save notification settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your account&apos;s security settings and devices.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">
                  Two-factor authentication
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account by enabling
                  two-factor authentication.
                </p>
              </div>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-sm text-muted-foreground">
                  Change your password or reset it if you&apos;ve forgotten it.
                </p>
              </div>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Devices</h3>
                <p className="text-sm text-muted-foreground">
                  Manage the devices that are currently logged into your
                  account.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update security settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>
                Manage your billing information and view your invoice history.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Current Plan</h3>
                <p className="text-sm text-muted-foreground">
                  You are currently on the <strong>Pro Plan</strong> at
                  $19.99/month.
                </p>
              </div>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <p className="text-sm text-muted-foreground">
                  Your current payment method is a Visa card ending in 1234.
                </p>
              </div>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Billing History</h3>
                <p className="text-sm text-muted-foreground">
                  View and download your past invoices.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Manage Billing</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsDashboardPage;
