package resources;

import api.UsageDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import core.User;
import core.Util;
import db.BookingDAO;
import io.dropwizard.auth.Auth;

import javax.validation.constraints.Min;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/usage")
@Produces(MediaType.APPLICATION_JSON)
public class UsageResource {
    private BookingDAO bookingDAO;

    public UsageResource(BookingDAO bookingDAO) {
        this.bookingDAO = bookingDAO;
    }

    @GET
    public List<UsageDTO> getUsageInInterval(@Auth User user,
                                             @QueryParam("startTime") @Min(0) long startTime,
                                             @QueryParam("endTime") @Min(0) long endTime) {
        return bookingDAO.getUsageInInterval(user.getName(),
                Util.convertMillisToDateAndFloorToNearest5Minutes(startTime),
                Util.convertMillisToDateAndFloorToNearest5Minutes(endTime));
    }
}
