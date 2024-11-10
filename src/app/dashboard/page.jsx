// import { currentUser } from "@/lib/auth";
import {
  Activity,
  Cloud,
  DollarSign,
  ShoppingCart,
  Sun,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OverviewChart from "./overview-chart";

export const metadata = {
  title: "Dashboard",
};

const DashboardHome = () => {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Download Report</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">&#8358;10.00</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                +0% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Listings
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <OverviewChart />
            </CardContent>
          </Card>
          <Card className="col-span-3 flex flex-col">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                You have 0 new activities today.
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              {/* <div className="space-y-8">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Purchased 50kg of organic apples
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+&#8358;250.00</div>
                </div>
                <div className="flex items-center">
                  <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Added 15 acres of corn field
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+15 acres</div>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Listed 200kg of organic strawberries
                    </p>
                  </div>
                  <div className="ml-auto font-medium">New Listing</div>
                </div>
              </div> */}
              <div className="flex justify-center items-center h-full text-center rounded-lg border-2 border-gray-300 border-dashed">
                <p>Your recent activities will appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Weather Forecast</CardTitle>
              <CardDescription>
                5-day weather forecast for your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Sun className="h-10 w-10 text-yellow-500" />
                <div className="space-y-1">
                  <p className="text-xl font-medium">Sunny</p>
                  <p className="text-sm text-muted-foreground">
                    High: 28°C | Low: 18°C
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Cloud className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-sm">Tomorrow: Partly Cloudy, 25°C</span>
                </div>
                <div className="flex items-center">
                  <Cloud className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-sm">Day 3: Cloudy, 23°C</span>
                </div>
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm">Day 4: Sunny, 27°C</span>
                </div>
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm">Day 5: Sunny, 29°C</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Featured Products</CardTitle>
              <CardDescription>
                Top selling and highly rated products this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/placeholder.svg"
                    className="rounded-md"
                    width={50}
                    height={50}
                    alt="Product"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Organic Tomatoes</p>
                    <p className="text-sm text-muted-foreground">
                      &#8358;3.99/kg
                    </p>
                  </div>
                  <Badge variant="secondary">Trending</Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/placeholder.svg"
                    className="rounded-md"
                    width={50}
                    height={50}
                    alt="Product"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Free-Range Eggs</p>
                    <p className="text-sm text-muted-foreground">
                      &#8358;5.99/dozen
                    </p>
                  </div>
                  <Badge variant="secondary">Best Seller</Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/placeholder.svg"
                    className="rounded-md"
                    width={50}
                    height={50}
                    alt="Product"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Grass-Fed Beef</p>
                    <p className="text-sm text-muted-foreground">
                      &#8358;12.99/lb
                    </p>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
