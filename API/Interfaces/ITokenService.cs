using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

// Interface is like a contract between itself and any class which implements it.
// Interface does not contain any implementation logic. It only contains the signature of the functionalities interface provides
// Interfaces are implemented for testing as we can mock its behaviour due to no implementation details and its best practice to use interfaces.

namespace API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}