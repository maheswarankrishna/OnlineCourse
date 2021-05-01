using Microsoft.EntityFrameworkCore;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository
{
    public class GetCertificateDbContext:DbContext
    {
        public GetCertificateDbContext(DbContextOptions options) :base(options)
        {

        }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<CourseType> CourseTypes { get; set; }
        public DbSet<CourseVideos> CourseVideos { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<QuizQuestions> QuizQuestions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<TeacherProfile> TeacherProfile { get; set; }
        public DbSet<StudentProfile> StudentProfile { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);            
        }
    }       
    
}
