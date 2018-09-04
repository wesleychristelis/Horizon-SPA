using System;

namespace dummy_api.models
{
    public class LogEntryDto
    {
        public DateTime EntryDate { get; set; }
        public string Message { get; set; }
        public LogLevel Level { get; set; }
        public String[] ExtraInfo { get; set; }
        public bool logWithDate { get; set; }
    }

    public enum LogLevel {
        All = 0,
        Debug = 1,
        Info = 2,
        Warn = 3,
        Error = 4,
        Fatal = 5,
        Off = 6
    }
}