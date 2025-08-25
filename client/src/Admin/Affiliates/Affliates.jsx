"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../Components/ui/card"
import { Button } from "../../Components/ui/button"
import { Input } from "../../Components/ui/input"
import { Label } from "../../Components/ui/label"
import { Textarea } from "../../Components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../Components/ui/tabs"
import { Badge } from "../../Components/ui/badge"
import { Upload, Download, Save, FileSpreadsheet, Users, TrendingUp } from "lucide-react"

export default function Affiliates() {
  const [yearStats, setYearStats] = useState({
    firstYear: "45",
    secondYear: "38",
    thirdYear: "42",
    fourthYear: "28",
  })

  const [benefits, setBenefits] = useState(`• Access to exclusive workshops and coding sessions
• Priority registration for all club events
• Mentorship from senior members and alumni
• Networking opportunities with industry professionals
• Certificate of affiliation from SRKR Coding Club
• Access to club resources and study materials
• Participation in inter-college competitions
• Career guidance and placement assistance`)

  const [xlsFiles] = useState([
    { year: "First Year", fileName: "first_year_affiliates_2024.xlsx", uploadDate: "2024-11-15", count: 45 },
    { year: "Second Year", fileName: "second_year_affiliates_2024.xlsx", uploadDate: "2024-11-15", count: 38 },
    { year: "Third Year", fileName: "third_year_affiliates_2024.xlsx", uploadDate: "2024-11-15", count: 42 },
    { year: "Fourth Year", fileName: "fourth_year_affiliates_2024.xlsx", uploadDate: "2024-11-15", count: 28 },
  ])

  const handleSave = () => {
    alert("Affiliates data saved successfully!")
  }

  const handleFileUpload = (year) => {
    // File upload logic here
    alert(`Upload XLS file for ${year}`)
  }

  const handleFileDownload = (fileName) => {
    // File download logic here
    alert(`Downloading ${fileName}`)
  }

  const totalAffiliates = Object.values(yearStats).reduce((sum, count) => sum + parseInt(count), 0)

  return (
    <div className="space-y-8 ml-64 mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Affiliates Management</h1>
          <p className="text-muted-foreground">Manage affiliate statistics, benefits, and year-wise data</p>
        </div>
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Affiliates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAffiliates}</div>
            <p className="text-xs text-muted-foreground">Active members across all years</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Year</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{yearStats.firstYear}</div>
            <p className="text-xs text-muted-foreground">
              {((parseInt(yearStats.firstYear) / totalAffiliates) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Second Year</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{yearStats.secondYear}</div>
            <p className="text-xs text-muted-foreground">
              {((parseInt(yearStats.secondYear) / totalAffiliates) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Third Year</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{yearStats.thirdYear}</div>
            <p className="text-xs text-muted-foreground">
              {((parseInt(yearStats.thirdYear) / totalAffiliates) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fourth Year</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{yearStats.fourthYear}</div>
            <p className="text-xs text-muted-foreground">
              {((parseInt(yearStats.fourthYear) / totalAffiliates) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="statistics" className="space-y-6">
        <TabsList>
          <TabsTrigger value="statistics">Year-wise Statistics</TabsTrigger>
          <TabsTrigger value="files">XLS File Management</TabsTrigger>
          <TabsTrigger value="benefits">Benefits Content</TabsTrigger>
        </TabsList>

        <TabsContent value="statistics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Update Year-wise Statistics</CardTitle>
              <CardDescription>Modify the number of affiliates for each academic year</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-year">First Year Students</Label>
                <Input
                  id="first-year"
                  type="number"
                  value={yearStats.firstYear}
                  onChange={(e) => setYearStats({ ...yearStats, firstYear: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="second-year">Second Year Students</Label>
                <Input
                  id="second-year"
                  type="number"
                  value={yearStats.secondYear}
                  onChange={(e) => setYearStats({ ...yearStats, secondYear: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="third-year">Third Year Students</Label>
                <Input
                  id="third-year"
                  type="number"
                  value={yearStats.thirdYear}
                  onChange={(e) => setYearStats({ ...yearStats, thirdYear: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fourth-year">Fourth Year Students</Label>
                <Input
                  id="fourth-year"
                  type="number"
                  value={yearStats.fourthYear}
                  onChange={(e) => setYearStats({ ...yearStats, fourthYear: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Year-wise XLS File Management</CardTitle>
              <CardDescription>Upload and manage Excel sheets containing affiliate data for each year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {xlsFiles.map((file, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileSpreadsheet className="h-8 w-8 text-green-600" />
                        <div>
                          <h4 className="font-medium">{file.year}</h4>
                          <p className="text-sm text-muted-foreground">{file.fileName}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{file.count} students</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Last updated: {new Date(file.uploadDate).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleFileDownload(file.fileName)}
                          className="gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleFileUpload(file.year)}
                          className="gap-2"
                        >
                          <Upload className="h-4 w-4" />
                          Replace
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Benefits Content</CardTitle>
              <CardDescription>Update the "What they get as an affiliate of SCC" section content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="benefits-content">Benefits Description</Label>
                <Textarea
                  id="benefits-content"
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  rows={12}
                  placeholder="List all the benefits that affiliates receive..."
                />
                <p className="text-sm text-muted-foreground">
                  Use bullet points (•) or numbered lists to organize the benefits clearly
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}