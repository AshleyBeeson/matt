import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Test;
import org.junit.Before;


//the purpose of this initial test is to navigate to the home page, then onto the Bug Tracker page//
//the automated test will then identify the filter checkboxes by their contents, and check them (ideally filtering their respective...//
//...Bug components out of the main page//
//the remaining bug components will then be searched for using their id of issueId//
//the specific reason for NOT filtering the "Issues can be duplicated" summary is that it should leave two individual Bugs with different..//
//..issueId's which can be found.//
//the test will then identify and re-check the summary "Search function doesn't like special characters", and find the BUG-00001"
//There are occasional sleep exceptions thrown in for those watching the tests to see what's happening a little clearer//
public class BugTrackerTest{

	@Before
	public void setup() {
		
	}
	
	@Test
	public void test() throws InterruptedException {
	System.setProperty("webdriver.chrome.driver", "C:\\LocalInstall\\selenium\\chromedriver_win32/chromedriver.exe");
	
			  WebDriver driver = new ChromeDriver();
			  driver.get("http://localhost:8081");
			  
			  driver.findElement(By.id("bugTrackerButton")).click();
			  Thread.sleep(2000);
			  driver.findElement(By.id("Search function doesn't like special characters")).click();
			  driver.findElement(By.id("The filter doesn't filter properly")).click();
			  driver.findElement(By.id("The food in the fridge isn't cold")).click();
			  driver.findElement(By.id("ISSUE-00002")).click();
			  driver.findElement(By.id("BUG-00003")).click();
			  driver.findElement(By.id("BUG-00003")).click();
			  Thread.sleep(3000);
			  driver.findElement(By.id("Search function doesn't like special characters")).click();
			  driver.findElement(By.id("BUG-00001")).click();
			  System.out.println(driver.getTitle());
			  System.out.println(driver.findElement(By.id("BUG-00001")).getText());
	}
	
	@Test
	public void test1() throws InterruptedException {
	System.setProperty("webdriver.chrome.driver", "C:\\LocalInstall\\selenium\\chromedriver_win32/chromedriver.exe");
	
			  WebDriver driver = new ChromeDriver();
			  driver.get("http://localhost:8081");
			  
			  driver.findElement(By.id("addBugsButton")).click();
			  Thread.sleep(2000);
			  driver.findElement(By.id("issueId")).sendKeys("1234");
	}
	
}

