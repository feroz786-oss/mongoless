package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Course struct {
	Id           string `json:"id"`
	Name         string `json:"name"`
	Duration     string `json:"duration"`
	Price        string `json:"price"`
	Trainer_Name string `json:"trainer_name"`
	Level        string `json:"level"`
	Description  string `json:"description"`
}

func createCourse(c *gin.Context) {
	var jbodyCourse Course
	if err := c.BindJSON(&jbodyCourse); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error. " + err.Error()})
		return
	}
	createdCourse := Course{
		Id:           "1",
		Name:         "java",
		Duration:     "4 years",
		Price:        "5000",
		Trainer_Name: "Jk",
		Level:        "high",
		Description:  "hejeeejh",
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Course Created Successfully", "course": createdCourse})
}

func readAllCourses(c *gin.Context) {
	courses := []Course{
		{
			Id:           "1",
			Name:         "java",
			Duration:     "4 years",
			Price:        "5000",
			Trainer_Name: "Jk",
			Level:        "high",
			Description:  "hejeeejh",
		},
		{
			Id:           "2",
			Name:         "java script",
			Duration:     "3 years",
			Price:        "4000",
			Trainer_Name: "Fk",
			Level:        "low",
			Description:  "hejeehhjsfejh",
		},
	}
	c.JSON(http.StatusOK, courses)
}

func readCourseById(c *gin.Context) {
	Id := c.Param("id")
	course := Course{
		Id:           Id,
		Name:         "java",
		Duration:     "4 years",
		Price:        "5000",
		Trainer_Name: "Jk",
		Level:        "high",
		Description:  "hejeeejh",
	}
	c.JSON(http.StatusOK, course)
}

func updateCourse(c *gin.Context) {
	Id := c.Param("id")
	var jbodyCourse Course
	err := c.BindJSON(&jbodyCourse)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error. " + err.Error()})
		return
	}
	updatedCourse := Course{
		Id:           Id,
		Name:         "java",
		Duration:     "4 years",
		Price:        "4000",
		Trainer_Name: "Jk",
		Level:        "high",
		Description:  "hejeeejh",
	}
	c.JSON(http.StatusOK, gin.H{"message": "Course Updated Successfully", "course": updatedCourse})
}

func deleteCourse(c *gin.Context) {
	id := c.Param("id")
	fmt.Println(id)
	c.JSON(http.StatusOK, gin.H{"message": "Course Deleted Successfully"})
}

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "content-type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	r.POST("/courses", createCourse)
	r.GET("/courses", readAllCourses)
	r.GET("/courses/:id", readCourseById)
	r.PUT("/courses/:id", updateCourse)
	r.DELETE("/courses/:id", deleteCourse)
	r.Run()
}
