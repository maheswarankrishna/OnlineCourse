using AutoMapper;
using server_side.Dtos;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Mapper
{
    public class AutoMapping:Profile
    {
        public AutoMapping()
        {
            CreateMap<CoursesDto, Courses>().ReverseMap();
            CreateMap<CourseVideosDto, CourseVideos>().ReverseMap();
            CreateMap<Quiz, QuizDto>().ReverseMap()
                .ForMember(x => x.Courses, opt => opt.Ignore());
            CreateMap<QuizQuestions, QuizQuestionsDto >().ReverseMap()
                .ForMember(x => x.Quiz, opt => opt.Ignore());
            CreateMap<Courses, CoursesDto>().ReverseMap();
            CreateMap<CourseVideos, CourseVideosDto>().ReverseMap();            
            CreateMap<CourseVideos, CourseVideosDto>();
            CreateMap<Courses, CoursesForUsersDto>();
            CreateMap<CoursesForUsersDto, Courses>();
            
        }
    }
}
