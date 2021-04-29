using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side
{
    [Serializable]
    public class Exceptions
    {
        public string OperationFailedException(string message)
        {
            return message;
        }
    }
}
